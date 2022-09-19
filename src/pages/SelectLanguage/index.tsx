import React, { useEffect, useState } from 'react'
import { Colors } from '../../styles/colors'
import {
  Container,
  ContainerButton,
  ContaninerSelect,
  MainOverlay,
} from './style'
import HeaderTitle from '../../components/HeaderTitle'
import SelectItem from '../../components/SelectItem'
import BrasilFlag from '../../assets/images/selectLanguages/brasil.png'
import EnglishFlag from '../../assets/images/selectLanguages/english.png'
import FrenchFlag from '../../assets/images/selectLanguages/french.png'
import Button from '../../components/Button'
import AppStorage from '../../services/appStorage'
import { useNavigation, useRoute } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'
import { FlagsProps } from 'types/flags'
import { MoreScreenData } from '../../types/more'
import { setLanguageToI18n, translate } from '../../services/i18n'

const SelectLanguage: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */

  const [selectedLanguage, setSelectedLanguage] = useState(null as any)

  /*
   *   HOOKS
   */
  const navigation = useNavigation<any>()
  const { params } = useRoute()

  /*
   *   LAYOUT
   */

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */

  const nextStep = async () => {
    if (!selectedLanguage) {
      showMessage({
        message: translate('Select one of the languages !'),

        type: 'danger',
      })
      return
    }

    await AppStorage.storeData('@lesVoitures:language', selectedLanguage)

    navigation.reset({
      index: 0,
      routes: [{ name: 'Redirect' }],
    })
  }

  /*
   *   EFFECTS
   */

  return (
    <>
      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />

        <HeaderTitle
          title={translate('Language')}
          subTitle={translate('Select your')}
          description={translate(
            'For the best experience, select your language below',
          )}
        />
        <ContaninerSelect>
          <SelectItem
            onPress={() => {
              setSelectedLanguage('fr_FR')
              setLanguageToI18n('fr_FR' as any)
            }}
            source={FrenchFlag}
            isFocused={selectedLanguage === 'fr_FR'}
            description={translate('French')}
          />

          <SelectItem
            onPress={() => {
              setSelectedLanguage('pt_BR')
              setLanguageToI18n('pt_BR' as any)
            }}
            source={BrasilFlag}
            isFocused={selectedLanguage === 'pt_BR'}
            description={translate('Portuguese')}
          />

          <SelectItem
            onPress={() => {
              setSelectedLanguage('en_US')
              setLanguageToI18n('en_US' as any)
            }}
            source={EnglishFlag}
            isFocused={selectedLanguage === 'en_US'}
            description={translate('English')}
          />
        </ContaninerSelect>
        <ContainerButton>
          <Button onPress={() => nextStep()}>{translate('Next')}</Button>
        </ContainerButton>
      </Container>
    </>
  )
}

export default SelectLanguage
