import styled from 'styled-components/native'
import { Colors } from '../../styles/colors'

export const Container = styled.TouchableOpacity`
  background: ${Colors.bgCard};
  border: 1px solid #ffffff;
  margin: 10px;
  border-radius: 20px;
`

export const Line = styled.View`
  border: 0.5px solid #969696;
  width: 100%;
`

export const TextTitle = styled.Text`
  font-family: 'Bold';
  font-size: 25px;
  text-align: center;
  padding: 10px;

  color: ${Colors.white};
`

export const ContainerDescription = styled.View`
  padding: 10px;
`

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const TextDescription = styled.Text<any>`
  font-family: ${(props) => (props.isDescription ? 'Italic' : 'Bold')};
  margin-left: ${(props) => (props.isDescription ? 10 : 0)}px;
  font-size: 10px;
  text-transform: ${(props) => (props.isDescription ? 'none' : 'uppercase')};
  color: ${(props) => (props.isDescription ? Colors.LightDark : Colors.white)};
`
