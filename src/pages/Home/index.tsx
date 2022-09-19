import React, { useContext, useEffect, useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../styles/colors'
import { Container, ContainerAction, MainOverlay } from './style'
import Header from '../../components/Header'
import AppStorage from '../../services/appStorage'
import ActionsButton from '../../components/ActionsButton'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import Octicons from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'
import { translate } from '../../services/i18n'
import { DataContext } from '../../context/appContext'

const Home: React.FC = () => {
  /*
   *   CONTEXT
   */
  const { user, getUser } = useContext(DataContext)

  /*
   *   REFS
   */

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

  /*
   *   EFFECTS
   */

  useEffect(() => {
    getUser()

    return () => {
      getUser()
    }
  }, [])

  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />

      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />

        <Header title={`${translate('Hi')}, ${user}`} withoutLeftSide />

        <HeaderTitle
          title={translate('Les’Voitures')}
          subTitle={translate('Welcome to')}
          description={translate(
            'Below you can edit, create and promote your cars',
          )}
          hasHeader
        />
        <ContainerAction>
          <ActionsButton
            icon={<AntDesign name="plus" size={25} color={Colors.white} />}
            description={translate('Add Cars')}
            onPress={() => navigation.navigate('AddCars')}
          />
          <ActionsButton
            icon={
              <Octicons name="list-unordered" size={25} color={Colors.white} />
            }
            description={translate('Car List')}
            onPress={() => navigation.navigate('ListCars')}
          />
          <ActionsButton
            icon={
              <Feather name="more-horizontal" size={25} color={Colors.white} />
            }
            description={translate('More')}
            onPress={() => navigation.navigate('More')}
            style={{ marginTop: 20 }}
          />
        </ContainerAction>
      </Container>
    </>
  )
}

export default Home
