import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import Button from '../../components/Button'
import HeaderTitle from '../../components/HeaderTitle'
import { Colors } from '../../styles/colors'
import { Container, ContainerButton, ContainerTop, MainOverlay } from './style'
import * as yup from 'yup'
import Input from '../../components/Input'
import Header from '../../components/Header'
import LoadingSpinner from '../../components/LoadingSpinner'
import { showMessage } from 'react-native-flash-message'
import AppStorage from '../../services/appStorage'
import { useNavigation } from '@react-navigation/native'

const Register: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */
  const nameFullRef = useRef(null)

  /*
   *   STATES
   */
  const [loading, setLoading] = useState(false)

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
  const { errors, handleSubmit, isValid, values, handleChange, setFieldValue } =
    useFormik({
      initialValues: {
        name: '',
      },
      enableReinitialize: true,
      validationSchema: yup.object().shape({
        name: yup.string().required('Inform the your name'),
      }),
      onSubmit: async () => {
        setLoading(true)
        try {
          await AppStorage.storeData('@lesVoitures:userName', values?.name)

          navigation?.navigate('Home')
        } catch (error) {
          console.log('ERROR THE SAVE', error)
          showMessage({
            message: 'Error the save the user , Try Again !',
            type: 'danger',
          })
        } finally {
          setLoading(false)
        }
      },
    })

  /*
   *   FUNCTIONS
   */

  /*
   *   EFFECTS
   */

  return (
    <>
      <LoadingSpinner show={loading} text="Loading ..." />
      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />
        <ContainerTop>
          <Header />
          <HeaderTitle
            title="Cadastrais"
            subTitle="Informações"
            description="Ok, Agora para sua experîencia preencha o campo abaixo."
            hasHeader
          />
          <Input
            passRef={nameFullRef}
            defaultValue={values.name}
            onChangeText={handleChange('name')}
            placeholder="Name"
            errorMessage={errors.name}
            marginTop="20px"
          />
        </ContainerTop>
        <ContainerButton>
          <Button onPress={handleSubmit}>Iniciar</Button>
        </ContainerButton>
      </Container>
    </>
  )
}

export default Register
