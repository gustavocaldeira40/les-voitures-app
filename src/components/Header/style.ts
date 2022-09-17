import { Metrics, statusBarHeight } from './../../styles/metricts'
import styled from 'styled-components/native'
import { Colors } from '../../styles/colors'

export const Container = styled.View`
  padding: ${statusBarHeight + 20}px 10px 10px 10px;
`

export const TextTitle = styled.Text`
  font-family: 'Black';
  font-size: 25px;

  text-align: center;

  color: ${Colors.white};
`
