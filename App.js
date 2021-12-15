import React, { useEffect, useRef, useState } from 'react'
import type { Node } from 'react'
import { Platform, SafeAreaView } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import SplashScreen from 'react-native-splash-screen'
import { WebView } from 'react-native-webview'

import NetworkError from './src/components/NetworkError'
import askPermission from './src/lib/askPermission'
import './src/lib/setupNotifications'
import { tokenApp } from './src/lib/setupNotifications'

const backgroundStyle = {
  flex: 1,
}

const uri = __DEV__
  ? 'https://05c1-2a01-e0a-a7d-b410-329c-23ff-fe00-9f0e.ngrok.io'
  : 'https://app.visualteams.fr'

const App: () => Node = () => {
  const [havePermission, setHavePermission] = useState(false)
  const netInfo = useNetInfo()
  const webRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)

    askPermission().then(() => setHavePermission(true))
  }, [])

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
      {netInfo.isConnected && havePermission ? (
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
        />
      ) : (
        <NetworkError />
      )}
    </SafeAreaView>
  )
}

export default App
