import styled from 'styled-components/native'
import { Colors } from '../../styles/colors'

export const Touchable = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #ffffff;
  border-radius: 20px;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 40%;
  height: 120px;
  margin: 10px;
`

export const TextDescription = styled.Text`
  font-family: 'Medium';
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
  line-height: 18px;
  color: ${Colors.white};
`
