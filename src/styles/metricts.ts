import { Dimensions } from 'react-native'
import { Platform, NativeModules } from 'react-native'

export const { width, height } = Dimensions.get('screen')

const { StatusBarManager } = NativeModules

export const statusBarHeight =
  Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export const Metrics = {
  padding: '20px',
  paddingTop: `90px 20px 0 20px`,
  paddingTextDescription: '0 50px 0 0',
  paddingVertical: '20px 0',
  marginSelectItem: '10px 20px',
}
