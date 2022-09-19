import MaskInput from 'react-native-mask-input'
import styled from 'styled-components/native'
import { Colors } from 'styles/colors'

export const Container = styled.View`
  margin: 10px;
`

export const ContainerInput = styled.View<any>`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`

export const InputMaskStyled = styled(MaskInput)`
  color: white;
  background-color: transparent;
  font-family: 'Medium';
`

export const TextError = styled.Text`
  font-family: 'Regular';
  color: ${Colors.error};
  font-size: 12px;
  margin: 10px;
`
