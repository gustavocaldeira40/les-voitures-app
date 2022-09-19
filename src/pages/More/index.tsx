import React from 'react'
import Header from 'components/Header'
import {
  Container,
  ContainerIcon,
  TouchableItem,
  ContainerTitle,
  Line,
  TextDescription,
  TextTitle,
  ContainerTop,
  TextVersion,
  ContainerVersion,
} from './style'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from 'styles/colors'
import { useNavigation } from '@react-navigation/native'
import { translate } from 'services/i18n'
import { appVersion } from 'env'
import { FontAwesome5 } from '@expo/vector-icons'

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
      <ContainerTop>
        <Header title={translate('More')} />
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
            <TextTitle>{translate('Language')}</TextTitle>
            <TextDescription>
              {translate('Here you can Change your default language')}
            </TextDescription>
          </ContainerTitle>
        </TouchableItem>
        <Line />

        <TouchableItem
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Register', { moreScreen: true })}
        >
          <ContainerIcon>
            {/* <MaterialCommunityIcons
              name="square-edit-outline"
              size={25}
              color={`${Colors.icon}88`}
            /> */}
            <FontAwesome5
              name="user-edit"
              size={22}
              color={`${Colors.icon}88`}
            />
          </ContainerIcon>
          <ContainerTitle>
            <TextTitle>{translate('Datas')}</TextTitle>
            <TextDescription>
              {translate('Here you can change your personal data')}
            </TextDescription>
          </ContainerTitle>
        </TouchableItem>
      </ContainerTop>
      <ContainerVersion>
        <TextVersion>Version {appVersion}</TextVersion>
      </ContainerVersion>
    </Container>
  )
}

export default More
