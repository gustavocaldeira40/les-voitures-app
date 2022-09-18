import AsyncStorage from '@react-native-async-storage/async-storage'

export default class AppStorage {
  static getData = async (tag: string) => {
    try {
      const value = await AsyncStorage.getItem(tag)
      if (value !== null) {
        return JSON.parse(value)
      }
      return false
    } catch (e) {}
  }

  static storeData = async (tag: string, value: string | any) => {
    try {
      await AsyncStorage.setItem(tag, JSON.stringify(value))
    } catch (e) {}
  }

  static remove = async (tag: string) => {
    try {
      await AsyncStorage.removeItem(tag)
    } catch (e) {}
  }
}
