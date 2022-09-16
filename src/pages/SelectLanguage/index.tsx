import React, { useState } from 'react'
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
import { FlagsProps } from 'src/types/flags'
import Button from '../../components/Button'
import AppStorage from '../../services/appStorage'
import { useNavigation } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'

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

    navigation.navigate('Register')
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
