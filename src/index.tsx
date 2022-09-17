import React from 'react'
import { useFonts } from 'expo-font'
import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'custom-font-icon': require('./assets/fonts/icons.ttf'),
    Light: require('./assets/fonts/Nunito-Light.ttf'),
    LightItalic: require('./assets/fonts/Nunito-LightItalic.ttf'),
    Regular: require('./assets/fonts/Nunito-Regular.ttf'),
    Italic: require('./assets/fonts/Nunito-Italic.ttf'),
    Medium: require('./assets/fonts/Nunito-Medium.ttf'),
    MediumItalic: require('./assets/fonts/Nunito-MediumItalic.ttf'),
    Bold: require('./assets/fonts/Nunito-Bold.ttf'),
    BoldItalic: require('./assets/fonts/Nunito-BoldItalic.ttf'),
    Black: require('./assets/fonts/Nunito-Black.ttf'),
    BlackItalic: require('./assets/fonts/Nunito-BlackItalic.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App
