import styled from 'styled-components/native'
import { Colors } from './../../styles/colors'

export const Touchable = styled.TouchableOpacity<any>`
  background: ${Colors.white};
  border: 1px solid #000000;
  border-radius: 50px;
  width: ${(props) => (props.width ? props.width : '50%')};
  height: ${(props) => (props.height ? props.height : '56px')};
  align-items: center;
  justify-content: center;
`

export const TextButton = styled.Text`
  font-family: 'Black';
  font-size: 15px;
  text-transform: uppercase;

  text-align: center;

  color: ${Colors.primary};
`
