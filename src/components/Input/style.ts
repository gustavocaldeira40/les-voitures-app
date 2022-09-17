import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import { Colors } from '../../styles/colors'

export const Container = styled.View`
  margin: 10px;
`

export const ContainerInput = styled.View`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #ffffff;
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
`

export const TextInputPersonalized = styled(TextInput)`
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
