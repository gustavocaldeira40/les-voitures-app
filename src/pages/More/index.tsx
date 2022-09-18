import React from 'react'
import Header from '../../components/Header'
import {
  Container,
  ContainerIcon,
  TouchableItem,
  ContainerTitle,
  Line,
  TextDescription,
  TextTitle,
} from './style'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'

const More: React.FC = () => {
  /*
   *   CONTEXT
   */

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

  return (
    <Container>
      <Header title="Mais" />
      <TouchableItem
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate('SelectLanguage', { moreScreen: true })
        }
      >
        <ContainerIcon>
          <FontAwesome name="globe" size={25} color={`${Colors.icon}88`} />
        </ContainerIcon>
        <ContainerTitle>
          <TextTitle>Idioma</TextTitle>
          <TextDescription>
            Aqui voce pode Alterar seu idioma padrão.
          </TextDescription>
        </ContainerTitle>
      </TouchableItem>
      <Line />

      <TouchableItem
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Register', { moreScreen: true })}
      >
        <ContainerIcon>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={25}
            color={`${Colors.icon}88`}
          />
        </ContainerIcon>
        <ContainerTitle>
          <TextTitle>Dados</TextTitle>
          <TextDescription>
            Aqui você pode alterar seus dados pessoais.
          </TextDescription>
        </ContainerTitle>
      </TouchableItem>
    </Container>
  )
}

export default More
