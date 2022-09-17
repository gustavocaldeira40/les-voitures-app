import React, { useEffect, useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../styles/colors'
import { Container, ContainerAction, MainOverlay } from './style'
import Header from '../../components/Header'
import AppStorage from '../../services/appStorage'
import ActionsButton from '../../components/ActionsButton'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import Octicons from 'react-native-vector-icons/Octicons'

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
      <StatusBar style="light" translucent backgroundColor="transparent" />

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
            description="Adicionar Carro"
          />
          <ActionsButton
            icon={<Octicons name="list-unordered" size={25} color="white" />}
            description="Lista de Carros"
          />
        </ContainerAction>
      </Container>
    </>
  )
}

export default Home
