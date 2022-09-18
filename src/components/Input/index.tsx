import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import CurrencyInput from 'react-native-currency-input'
import { Colors } from '../../styles/colors'
import {
  Container,
  ContainerInput,
  TextError,
  TextInputPersonalized,
} from './style'

interface InputProps extends TextInputProps {
  passRef?: React.MutableRefObject<null>
  disabled?: boolean
  noradius?: boolean
  errorMessage?: string
  placeholder?: string
  marginTop?: string
}

const Input: React.FC<InputProps> = ({
  passRef,
  disabled,
  noradius,
  errorMessage,
  placeholder,
  marginTop,

  ...props
}) => {
  return (
    <Container>
      <ContainerInput marginTop={marginTop}>
        <TextInputPersonalized
          selectionColor={Colors.secondary}
          placeholder={placeholder}
          ref={passRef}
          placeholderTextColor={Colors.lightGray}
          {...props}
        />
      </ContainerInput>
      {errorMessage && <TextError>{errorMessage}</TextError>}
    </Container>
  )
}

export default Input
