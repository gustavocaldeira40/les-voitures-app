import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import Button from 'components/Button'
import HeaderTitle from 'components/HeaderTitle'
import { Colors } from 'styles/colors'
import { Container, ContainerButton, ContainerTop, MainOverlay } from './style'
import * as yup from 'yup'
import Input from 'components/Input'
import Header from 'components/Header'
import LoadingSpinner from 'components/LoadingSpinner'
import { showMessage } from 'react-native-flash-message'
import AppStorage from 'services/appStorage'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { translate } from 'services/i18n'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
        name: yup.string().required(translate('Inform the your name')),
      }),
      onSubmit: async () => {
        setLoading(true)
        try {
          await AppStorage.storeData('@lesVoitures:userName', values?.name)

          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        } catch (error) {
          console.log('ERROR THE SAVE', error)

          showMessage({
            message: translate('Error the save the user , Try Again!'),
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
      <StatusBar translucent backgroundColor="transparent" style="light" />

      <LoadingSpinner show={loading} />

      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />
        <KeyboardAwareScrollView
          scrollEnabled
          bouncesZoom={false}
          contentContainerStyle={{
            justifyContent: 'space-evenly',
            minHeight: '100%',
            // paddingBottom: 20,
          }}
        >
          <ContainerTop>
            <HeaderTitle
              title={translate('Cadastral')}
              subTitle={translate('Information')}
              description={translate(
                'Ok, Now for your experience, fill in the field below',
              )}
              // hasHeader
            />
            <Input
              passRef={nameFullRef}
              defaultValue={values.name}
              onChangeText={handleChange('name')}
              placeholder={translate('Name')}
              errorMessage={errors.name}
              marginTop="20px"
            />
          </ContainerTop>
          <ContainerButton>
            <Button disabled={!isValid} onPress={handleSubmit}>
              {translate('Start')}
            </Button>
          </ContainerButton>
        </KeyboardAwareScrollView>
      </Container>
    </>
  )
}

export default Register
