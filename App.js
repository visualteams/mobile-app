import React, { useEffect, useState } from 'react'
import type { Node } from 'react'
import { SafeAreaView } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import SplashScreen from 'react-native-splash-screen'
import { WebView } from 'react-native-webview'

import NetworkError from './src/components/NetworkError'
import askPermission from './src/lib/askPermission'

const backgroundStyle = {
  flex: 1,
}

const uri = 'https://25688d4fe0a1.ngrok.io'

const App: () => Node = () => {
  const [havePermission, setHavePermission] = useState(false)
  const netInfo = useNetInfo()

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)

    askPermission().then(() => setHavePermission(true))
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      {netInfo.isConnected && havePermission ? (
        <WebView
          source={{ uri }}
          allowsInlineMediaPlayback
          originWhitelist={['*']}
          mediaPlaybackRequiresUserAction={false}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled={true}
        />
      ) : (
        <NetworkError />
      )}
    </SafeAreaView>
  )
}

export default App
