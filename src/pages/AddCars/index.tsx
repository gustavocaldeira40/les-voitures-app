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
      title: yup.string().required('Inform the title'),
      brand: yup.string().required('Inform the brand'),
      price: yup.string().required('Inform the price'),
      age: yup.string().required('Inform the age'),
    }),
    onSubmit: async (_values,set) => {
      setLoading(true)
      try {
        const actuallyDate = new Date()
        const isFuture = moment(values?.age)?.isAfter(actuallyDate)

        if (isFuture) {
          errors.age = 'O Ano não é valido'
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
          console.log('ATUALIZOU', data)

          if (data) {
            resetForm()
            navigation.navigate('ListCars', { reload: true })

            showMessage({
              message: 'Car Edited Successfully',
              type: 'success',
            })
          }
        }

        console.log('FORMDATA,', formData)

        const data = await EndPoints.createCar(formData)

        if (data) {
          resetForm()

          showMessage({ message: 'Car Created Successfully', type: 'success' })
        }
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
  const setFields = () => {}

  /*
   *   EFFECTS
   */
  useEffect(() => {
    if (params !== undefined) {
      const { _id, title, brand, price, age } = (params as ParamsData)?.item

      setFieldValue('_id', _id)
      setFieldValue('title', title)
      setFieldValue('brand', brand)
      setFieldValue('price', price)
      setFieldValue('age', age)
    }
  }, [params])

  return (
    <>
      <Container>
        <MainOverlay
          colors={[Colors.secondary, Colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
        />

        <KeyboardAwareScrollView
          scrollEnabled
          contentContainerStyle={{
            justifyContent: 'space-between',
            minHeight: '100%',
          }}
        >
          <ContainerTop>
            <Header />
            <HeaderTitle
              title="Carros"
              subTitle="Adicionar"
              description="Preencha os campos abaixo para adicionar seus carros."
              hasHeader
            />
            <ContainerInputs>
              <Input
                passRef={titleRef}
                defaultValue={values.title}
                onChangeText={handleChange('title')}
                placeholder="Veículo"
                errorMessage={errors.title}
                onSubmitEditing={() => (brandRef as any).current.focus()}
              />
              <Input
                passRef={brandRef}
                defaultValue={values.brand}
                onChangeText={handleChange('brand')}
                placeholder="Marca"
                errorMessage={errors.brand}
                onSubmitEditing={() => (priceRef as any).current.focus()}
              />
              <InputMask
                passRef={priceRef}
                value={values.price}
                onChangeText={(value) => {
                  setFieldValue('price', value)
                }}
                placeholder="Valor"
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
              Salvar
            </Button>
          </ContainerButton>
        </KeyboardAwareScrollView>
      </Container>
    </>
  )
}

export default AddCars
