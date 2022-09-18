import styled from 'styled-components/native'
import { Metrics } from '../../styles/metricts'

export const Container = styled.TouchableOpacity<any>`
  background: ${(props) =>
    props.isFocused ? 'rgba(218, 218, 218, 0.25)' : 'rgba(37, 37, 37, 0.1)'};
  border: 1.5px solid #ffffff;
  border-radius: 40px;
  padding: 15px 20px;
  margin: ${Metrics.marginSelectItem};
  flex-direction: row;
  align-items: center;
`

export const ImageFlag = styled.Image`
  margin-right: 20px;
  width: 40px;
  height: 40px;
`

export const TextDescription = styled.Text<any>`
  font-family: ${(props) => (props.isFocused ? 'Bold' : 'Light')};
  font-size: 20px;
  text-align: center;
  margin-right: 40px;
  flex: 1;

  color: #ffffff;
`
