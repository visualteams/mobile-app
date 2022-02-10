import React, { useEffect, useRef, useState } from 'react'
import type { Node } from 'react'
import { Platform, SafeAreaView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { WebView } from 'react-native-webview'
import StaticServer from 'react-native-static-server'
import RNFS from 'react-native-fs'
import mapLimit from 'async/mapLimit'
import * as Sentry from '@sentry/react-native'

import askPermission from './src/lib/askPermission'
import './src/lib/setupNotifications'
import { tokenApp } from './src/lib/setupNotifications'

Sentry.init({
  dsn: 'https://1c00cee94f1044d19492568e91f311e1@o395580.ingest.sentry.io/6197563',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
})

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
  const [url, setUrl] = useState(null)
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
    const server = new StaticServer(8389, getWebResourcesPath(), { localOnly: true })

    console.log('Ask permissions')

    await askPermission()

    console.log('Start init')

    await initialize()

    console.log('Init done !')

    const url = await server.start()

    console.log('Serving at URL', url)

    setUrl(url)
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

  const uri = `${url}/index.html`

  console.log('uri:', uri)

  return (
    <SafeAreaView style={backgroundStyle}>
      {url && (
        <WebView
          ref={webRef}
          userAgent={`in-app Mobile ${Platform.OS}`}
          source={{ uri }}
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

export default Sentry.wrap(App)
