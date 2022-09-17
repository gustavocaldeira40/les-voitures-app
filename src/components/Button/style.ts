import styled from 'styled-components/native'
import { Colors } from './../../styles/colors'

export const Touchable = styled.TouchableOpacity<any>`
  background: ${(props) => (props.secondary ? 'transparent' : Colors.white)};
  border: ${(props) =>
    props.secondary ? '1px solid #ffffff' : '1px solid #000000'};
  border-radius: 50px;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => (props.width ? props.width : '50%')};
  height: ${(props) => (props.height ? props.height : '56px')};
  align-items: center;
  justify-content: center;
`

export const TextButton = styled.Text<any>`
  font-family: 'Black';
  font-size: 15px;
  text-transform: uppercase;

  text-align: center;

  color: ${(props) => (props.secondary ? Colors.white : Colors.primary)};
`
