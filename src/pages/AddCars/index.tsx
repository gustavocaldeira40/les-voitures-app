import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import HeaderTitle from '../../components/HeaderTitle'

import { Colors } from '../../styles/colors'
import {
  Container,
  ContainerButton,
  ContainerInputs,
  ContainerTop,
  MainOverlay,
} from './style'
import * as yup from 'yup'
import { showMessage } from 'react-native-flash-message'
import { useNavigation, useRoute } from '@react-navigation/native'
import Input from '../../components/Input'

import Button from '../../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputMask from '../../components/InputMask'
import { EndPoints } from '../../services/endPoints'
import moment from 'moment'
import { ParamsData } from '../../types/params'
import LoadingSpinner from '../../components/LoadingSpinner'
import { translate } from '../../services/i18n'

const AddCars: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */
  const titleRef = useRef(null)
  const brandRef = useRef(null)
  const ageRef = useRef(null)
  const priceRef = useRef(null)

  /*
   *   STATES
   */
  const [loading, setLoading] = useState(false)

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

  const {
    errors,
    handleSubmit,
    isValid,
    resetForm,
    values,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: {
      _id: '',
      title: '',
      brand: '',
      price: '',
      age: '',
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      title: yup
        .string()
        .required(translate('Enter the name/title of the vehicle')),
      brand: yup.string().required(translate('Inform the make of the vehicle')),
      price: yup.string().required(translate('Enter the value of the vehicle')),
      age: yup.string().required(translate('Inform the year of the vehicle')),
    }),
    onSubmit: async (_values, set) => {
      setLoading(true)
      try {
        const actuallyDate = new Date()
        const isFuture = moment(values?.age)?.isAfter(actuallyDate)

        if (isFuture) {
          errors.age = translate('The year entered is not valid')
          return
        }

        const formData = {
          title: values?.title,
          brand: values?.brand,
          price: values?.price?.replace('R$ ', ''),
          age: Number(values?.age),
        }

        if (params !== undefined) {
          const data = await EndPoints.updateCar(values?._id, formData)

          if (data) {
            resetForm()
            navigation.navigate('ListCars', { reload: true })

            showMessage({
              message: translate('Car Edited Successfully'),
              type: 'success',
            })
          }
        }

        console.log('FORMDATA,', formData)

        const data = await EndPoints.createCar(formData)

        if (data) {
          resetForm()

          showMessage({
            message: translate('Car Created Successfully'),
            type: 'success',
          })
        }
      } catch (error) {
        console.log('ERROR THE SAVE', error)

        showMessage({
          message: translate('Error the save the vehicle , Try Again !'),
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
  const setFields = () => {
    const { _id, title, brand, price, age } = (params as ParamsData)?.item

    setFieldValue('_id', _id)
    setFieldValue('title', title)
    setFieldValue('brand', brand)
    setFieldValue('price', price)
    setFieldValue('age', age)
  }

  /*
   *   EFFECTS
   */
  useEffect(() => {
    if (params !== undefined) {
      setFields()
    }
  }, [params])

  return (
    <>
      <LoadingSpinner show={loading} />
      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />

        <KeyboardAwareScrollView
          scrollEnabled
          contentContainerStyle={{
            justifyContent: 'space-evenly',
            minHeight: '100%',
          }}
        >
          <ContainerTop>
            <Header />
            <HeaderTitle
              title={translate('Cars')}
              subTitle={translate('Add')}
              description={translate(
                'Fill in the fields below to add your cars',
              )}
              hasHeader
            />
            <ContainerInputs>
              <Input
                passRef={titleRef}
                defaultValue={values.title}
                onChangeText={handleChange('title')}
                placeholder={translate('Vehicle')}
                errorMessage={errors.title}
                onSubmitEditing={() => (brandRef as any).current.focus()}
              />
              <Input
                passRef={brandRef}
                defaultValue={values.brand}
                onChangeText={handleChange('brand')}
                placeholder={translate('Brand')}
                errorMessage={errors.brand}
                onSubmitEditing={() => (priceRef as any).current.focus()}
              />
              <InputMask
                passRef={priceRef}
                value={values.price}
                onChangeText={(value) => {
                  setFieldValue('price', value)
                }}
                placeholder={translate('Value')}
                errorMessage={errors.price}
                isCurrency
                onSubmitEditing={() => (ageRef as any).current.focus()}
              />

              <Input
                passRef={ageRef}
                keyboardType="numeric"
                maxLength={4}
                defaultValue={String(values.age)}
                onChangeText={handleChange('age')}
                placeholder="YYYY"
                errorMessage={errors.age}
                onSubmitEditing={() => handleSubmit()}
              />
            </ContainerInputs>
          </ContainerTop>
          <ContainerButton>
            <Button disabled={!isValid} onPress={handleSubmit}>
              {translate('Save')}
            </Button>
          </ContainerButton>
        </KeyboardAwareScrollView>
      </Container>
    </>
  )
}

export default AddCars
