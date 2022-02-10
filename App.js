import React, { useEffect, useRef, useState } from 'react'
import type { Node } from 'react'
import { Platform, SafeAreaView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { WebView } from 'react-native-webview'
import StaticServer from 'react-native-static-server'
import RNFS from 'react-native-fs'
import mapLimit from 'async/mapLimit'

import askPermission from './src/lib/askPermission'
import './src/lib/setupNotifications'
import { tokenApp } from './src/lib/setupNotifications'

const backgroundStyle = {
  flex: 1,
}

function getWebResourcesPath() {
  return Platform.OS === 'android' ? RNFS.DocumentDirectoryPath + '/www' : RNFS.MainBundlePath + '/www'
}

async function copyWWWBuildFiles(directory: string) {
  const items = await RNFS.readDirAssets(directory)

  await mapLimit(items, 20, async (file, cb) => {
    if (file.isDirectory()) {
      await RNFS.mkdir(RNFS.DocumentDirectoryPath + '/' + file.path)
      await copyWWWBuildFiles(file.path)
    } else {
      await RNFS.copyFileAssets(file.path, RNFS.DocumentDirectoryPath + '/' + file.path)
    }

    cb()
  })
}

const App: () => Node = () => {
  const [havePermission, setHavePermission] = useState(false)
  const webRef = useRef()

  const initialize = async () => {
    const isInitialized = await RNFS.exists(getWebResourcesPath())

    console.log('isInitialized', isInitialized)

    if (!isInitialized) {
      await RNFS.mkdir(getWebResourcesPath())
      await copyWWWBuildFiles('www')
    }
  }

  useEffect(() => {
    startApplication()
  }, [])

  const startApplication = async () => {
    const server = new StaticServer(8080, getWebResourcesPath(), { localOnly: true })

    await askPermission()

    await initialize()

    const url = await server.start()

    console.log('Serving at URL', url)

    setHavePermission(true)
  }

  const handleMessage = (event) => {
    const data = JSON.parse(event?.nativeEvent?.data || '{}')

    if (data.type === 'sendTokenApp') sendTokenApp()
  }

  const sendTokenApp = () => {
    if (tokenApp) {
      webRef.current.injectJavaScript(`(function() {
          Meteor.call('users.updateToken', '${tokenApp.os}', '${tokenApp.token}')
      })();`)
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      {havePermission && (
        <WebView
          ref={webRef}
          userAgent={`in-app Mobile ${Platform.OS}`}
          source={{ uri: 'http://localhost:8080/index.html' }}
          allowsInlineMediaPlayback
          originWhitelist={['*']}
          mediaPlaybackRequiresUserAction={false}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled={true}
          onMessage={handleMessage}
          cacheEnabled={true}
          onLoadEnd={() => SplashScreen.hide()}
        />
      )}
    </SafeAreaView>
  )
}

export default App
