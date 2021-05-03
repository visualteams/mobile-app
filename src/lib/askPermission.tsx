import { Platform } from 'react-native'
import { request, PERMISSIONS, requestMultiple } from 'react-native-permissions'

const askPermission = async () => {
  if (Platform.OS === 'android') {
    requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.RECORD_AUDIO]).then((result) => {
      console.log('result:', result)
    })
  }
}

export default askPermission
