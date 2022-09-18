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
import { Platform, NativeModules } from 'react-native'
import BrasilFlag from '../../assets/images/selectLanguages/brasil.png'
import EnglishFlag from '../../assets/images/selectLanguages/english.png'
import FrenchFlag from '../../assets/images/selectLanguages/french.png'
import Button from '../../components/Button'
import AppStorage from '../../services/appStorage'
import { useNavigation, useRoute } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'
import { FlagsProps } from 'types/flags'
import { MoreScreenData } from '../../types/more'

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

  const [flags, setFlags] = useState([
    { flag: BrasilFlag, description: 'Português' },
    { flag: FrenchFlag, description: 'França' },
    { flag: EnglishFlag, description: 'Inglês' },
  ])
  const [selectedFlag, setSelectedFlag] = useState<FlagsProps>(null as any)

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
    if (!selectedFlag) {
      showMessage({
        message: 'Selecione um idioma',
        description:
          'Para prosseguirmos é necessário selecionar um idioma abaixo',
        type: 'danger',
      })
      return
    }

    await AppStorage.storeData('@lesVoitures:language', selectedFlag)

    if (params !== undefined) {
      console.log('PARAMS', params)

      const { moreScreen } = params as MoreScreenData
      if (moreScreen) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Redirect' }],
        })
      }
    } else {
      navigation.navigate('Register')
    }
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
          title="Idioma"
          subTitle="Selecione seu"
          description="Para uma melhor experiência, selecione abaixo."
        />
        <ContaninerSelect>
          {flags?.map((item, index) => {
            return (
              <SelectItem
                onPress={() => setSelectedFlag(item)}
                source={item?.flag}
                key={index}
                description={item?.description}
                isFocused={item?.description === selectedFlag?.description}
              />
            )
          })}
        </ContaninerSelect>
        <ContainerButton>
          <Button onPress={() => nextStep()}>Próximo</Button>
        </ContainerButton>
      </Container>
    </>
  )
}

export default SelectLanguage
