import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SelectLanguage from '../pages/SelectLanguage'
import RedirectScreen from '../pages/Redirect'
import Register from '../pages/Register'
import FlashMessage from 'react-native-flash-message'
import { statusBarHeight } from '../styles/metricts'
import Home from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <>
      <Navigator initialRouteName="Redirect">
        <Screen
          name="Redirect"
          component={RedirectScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="SelectLanguage"
          component={SelectLanguage}
          options={{ headerShown: false }}
        />
        <Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Navigator>

      <FlashMessage
        position="top"
        animated
        floating
        statusBarHeight={statusBarHeight}
      />
    </>
  )
}

export default Routes
