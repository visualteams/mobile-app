import { Platform } from 'react-native'
import { PERMISSIONS, requestMultiple } from 'react-native-permissions'

const askPermission = async () => {
  if (Platform.OS === 'android') {
    await requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.RECORD_AUDIO])
  } else {
    await requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE])
  }
}

export default askPermission
