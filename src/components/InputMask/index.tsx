import React from 'react'
import { Container, ContainerInput, InputMaskStyled, TextError } from './style'
import { Masks, MaskInputProps } from 'react-native-mask-input'
import { Colors } from 'styles/colors'

interface InputMaskProps extends MaskInputProps {
  passRef?: any
  errorMessage?: string
  placeholder?: string
  marginTop?: string
  mask?: any
  onChangeText: (masked: string, unmasked: string, obfuscated: string) => void
  isCurrency?: boolean
}

const InputMask: React.FC<InputMaskProps> = ({
  value,
  passRef,
  marginTop,
  errorMessage,
  mask,
  isCurrency,
  onChangeText,
  ...props
}) => {
  return (
    <Container>
      <ContainerInput marginTop={marginTop}>
        <InputMaskStyled
          ref={passRef}
          value={value}
          onChangeText={onChangeText}
          mask={isCurrency ? Masks.BRL_CURRENCY : mask}
          placeholderTextColor={Colors.lightGray}
          keyboardType="numeric"
        />
      </ContainerInput>
      {errorMessage && <TextError>{errorMessage}</TextError>}
    </Container>
  )
}

export default InputMask
