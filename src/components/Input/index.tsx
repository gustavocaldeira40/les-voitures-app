import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
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
}

const Input: React.FC<InputProps> = ({
  passRef,
  disabled,
  noradius,
  errorMessage,
  placeholder,
  ...props
}) => {
  return (
    <Container>
      <ContainerInput>
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
