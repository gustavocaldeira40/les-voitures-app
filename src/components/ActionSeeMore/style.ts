import styled from 'styled-components/native'
import { Colors } from './../../styles/colors'

export const Container = styled.View`
  background: rgba(0, 0, 0, 0.6);
  padding: 30px;
  width: 150px;
  margin: 10px;
  border-radius: 20px;
`

export const ContainerTexts = styled.View<any>`
  flex-direction: row;
  margin-top: ${(props) => (props.withMargin ? 5 : 0)}px;
  justify-content: center;
  align-items: center;
`

export const TextDescription = styled.Text<any>`
  font-family: ${(props) => (props.isDescription ? 'Light' : 'Bold')};
  font-size: ${(props) => (props.isDescription ? 15 : 20)}px;
  text-align: center;
  color: ${(props) => (props.isCurrency ? Colors.LightDark : Colors.white)};
`
