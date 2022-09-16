import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import LogoImage from '../../assets/visual/icon-write.png'
import {
  Container,
  ContainerLoading,
  ContainerLogo,
  Logo,
  MainOverlay,
} from './style'
import { Colors } from '../../styles/colors'
import Loading from '../../components/Loading'
import AppStorage from '../../services/appStorage'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const RedirectScreen: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */
  const fadeAnim = useRef(new Animated.Value(0)).current
  const scale = useRef(new Animated.Value(1)).current

  /*
   *   STATES
   */

  /*
   *   HOOKS
   */
  const navigation = useNavigation<any>()

  /*
   *   LAYOUT
   */

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */
  const loadData = async () => {
    const language = await AppStorage.getData('@lesVoitures:language')
    const user = await AppStorage.getData('@lesVoitures:user')

    if (!language) {
      navigation.navigate('SelectLanguage')
    } else if (!user) {
      navigation.navigate('Register')
    }
  }

  const removeKeys = async () => {
    await AppStorage.remove('@lesVoitures:language')
    await AppStorage.remove('@lesVoitures:user')
  }

  /*
   *   EFFECTS
   */

  useEffect(() => {
    removeKeys()
  }, [])

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1.2,
        easing: Easing.ease,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start()
  }, [fadeAnim])

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />
        <ContainerLogo
          style={{ opacity: fadeAnim, transform: [{ scale: scale }] }}
        >
          <Logo source={LogoImage} />
        </ContainerLogo>
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      </Container>
    </>
  )
}

export default RedirectScreen
