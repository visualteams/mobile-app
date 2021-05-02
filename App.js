import React, { useEffect } from 'react'
import type { Node } from 'react'
import { SafeAreaView } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import SplashScreen from 'react-native-splash-screen'
import { WebView } from 'react-native-webview'

import NetworkError from './src/components/NetworkError'

const backgroundStyle = {
  flex: 1,
}

const uri = 'https://app.visualteams.fr'

const App: () => Node = () => {
  const netInfo = useNetInfo()

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      {netInfo.isConnected ? <WebView source={{ uri }} /> : <NetworkError />}
    </SafeAreaView>
  )
}

export default App
