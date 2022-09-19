import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SelectLanguage from '../pages/SelectLanguage'
import RedirectScreen from '../pages/Redirect'
import Register from '../pages/Register'
import FlashMessage from 'react-native-flash-message'
import { statusBarHeight } from '../styles/metricts'
import Home from '../pages/Home'
import ListCars from '../pages/ListCars'
import AddCars from '../pages/AddCars'
import SeeMore from '../pages/SeeMore'
import More from '../pages/More'
import AppContext from '../context/appContext'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <>
      <AppContext>
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
          <Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Screen
            name="ListCars"
            component={ListCars}
            options={{ headerShown: false }}
          />
          <Screen
            name="AddCars"
            component={AddCars}
            options={{ headerShown: false }}
          />
          <Screen
            name="SeeMore"
            component={SeeMore}
            options={{ headerShown: false }}
          />
          <Screen
            name="More"
            component={More}
            options={{ headerShown: false }}
          />
        </Navigator>
      </AppContext>
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
