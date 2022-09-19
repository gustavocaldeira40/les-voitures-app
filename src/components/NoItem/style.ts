import styled from 'styled-components/native'
import { Colors } from 'styles/colors'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const NoImage = styled.Image`
  width: 120px;
  height: 120px;
`

export const TextNoItem = styled.Text`
  font-family: 'ExtraLight';
  font-size: 20px;

  color: ${Colors.LightDark};
`
