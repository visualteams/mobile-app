import { Platform } from 'react-native'
import { PERMISSIONS, requestMultiple } from 'react-native-permissions'

const askPermission = async () => {
  if (Platform.OS === 'android') {
    await requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ])
  } else {
    await requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE])
  }
}

export default askPermission
