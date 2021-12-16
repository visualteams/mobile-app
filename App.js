import React, { useEffect, useRef, useState } from 'react'
import type { Node } from 'react'
import { Platform, SafeAreaView } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import SplashScreen from 'react-native-splash-screen'
import { WebView } from 'react-native-webview'
import RNFS from 'react-native-fs'
import httpBridge from 'react-native-http-bridge'

import NetworkError from './src/components/NetworkError'
import askPermission from './src/lib/askPermission'
import './src/lib/setupNotifications'
import { tokenApp } from './src/lib/setupNotifications'

const backgroundStyle = {
  flex: 1,
}

const base_url = 'https://b807-82-65-139-103.ngrok.io'

// path where files will be served from (index.html here)
let path = RNFS.DocumentDirectoryPath

const cacheFile = async (fileName) => {
  const _url = base_url + fileName
  const _path = `${path}${fileName}`

  const exists = await RNFS.exists(_path)

  if (!exists) {
    console.log('Caching ', _url, 'to', _path)
    const job = RNFS.downloadFile({
      fromUrl: _url,
      toFile: _path,
    })

    await job.promise
    console.log('Cached ', _path)
  }

  let encoding = 'utf8'
  if (_path.includes('.png') || _path.includes('.ico')) encoding = 'base64'

  if (encoding === 'base64') {
    const base64Result = await RNFS.readFile(_path, encoding)

    return base64Result.toString()
  } else return RNFS.readFile(_path, encoding)
}

const activeCache = false

const App: () => Node = () => {
  const [havePermission, setHavePermission] = useState(false)
  const netInfo = useNetInfo()
  const webRef = useRef()
  const [uri, setUri] = useState(false)

  useEffect(() => {
    SplashScreen.hide()
    /*setTimeout(() => {
      SplashScreen.hide()
    }, 2000)*/

    if (activeCache) fetchWebApp()
    else setUri(base_url)

    askPermission().then(() => setHavePermission(true))

    return () => {
      activeCache && httpBridge.stop()
    }
  }, [])

  const fetchWebApp = async () => {
    await RNFS.mkdir(path + '/packages')
    await RNFS.mkdir(path + '/app')
    await RNFS.mkdir(path + '/images')

    httpBridge.start(8080, 'http_service', async (request) => {
      console.log('request.url:', request.url)
      const response = await cacheFile(request.url)
      console.log('response ready', request.url)

      let type
      if (request.url.includes('.html')) type = 'text/html'
      else if (request.url.includes('.js')) type = 'application/javascript'
      else if (request.url.includes('.css')) type = 'text/css'
      else if (request.url.includes('.png')) type = 'image/png'

      if (response) httpBridge.respond(request.requestId, 200, type, response)
      else httpBridge.respond(request.requestId, 404, 'text/plain', 'not found')
      console.log('response sent', request.url)
    })

    setTimeout(() => {
      setUri('http://localhost:8080')
    }, 500)
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

  console.log('uri:', `${uri}/index.html`)

  return (
    <SafeAreaView style={backgroundStyle}>
      {netInfo.isConnected && havePermission && uri ? (
        <WebView
          ref={webRef}
          userAgent={`in-app Mobile ${Platform.OS}`}
          source={{ uri: `${uri}/index.html` }}
          allowsInlineMediaPlayback
          originWhitelist={['*']}
          mediaPlaybackRequiresUserAction={false}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled={true}
          onMessage={handleMessage}
        />
      ) : (
        <NetworkError />
      )}
    </SafeAreaView>
  )
}

export default App
