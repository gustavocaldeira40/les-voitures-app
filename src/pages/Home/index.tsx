import React, { useEffect, useState } from 'react'
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

const Home: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */
  const [userName, setUserName] = useState(null as any)

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
  const getUser = async () => {
    const user = await AppStorage.getData('@lesVoitures:userName')

    if (user) {
      setUserName(user)
    }
  }

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
      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />

        <Header title={`Ola, ${userName}`} withoutLeftSide />

        <HeaderTitle
          title="Les’Voitures"
          subTitle="Bem-vindo ao"
          description="Abaixo você pode editar, criar e divulgar seus carros"
          hasHeader
        />
        <ContainerAction>
          <ActionsButton
            icon={<AntDesign name="plus" size={25} color="white" />}
            description="Adicionar Carros"
            onPress={() => navigation.navigate('AddCars')}
          />
          <ActionsButton
            icon={<Octicons name="list-unordered" size={25} color="white" />}
            description="Lista de Carros"
            onPress={() => navigation.navigate('ListCars')}
          />
          <ActionsButton
            icon={<Feather name="more-horizontal" size={25} color="white" />}
            description="Mais"
            onPress={() => navigation.navigate('More')}
            style={{ marginTop: 20 }}
          />
        </ContainerAction>
      </Container>
    </>
  )
}

export default Home
