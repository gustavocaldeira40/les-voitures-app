import styled from 'styled-components/native'
import { Metrics } from './../../styles/metricts'
import { Colors } from '../../styles/colors'

export const Container = styled.View`
  padding: ${Metrics.paddingTop};
`

export const TextSubTitle = styled.Text`
  font-family: 'Bold';
  font-size: 20px;
  color: ${Colors.subTitle};
`

export const TextTitle = styled.Text`
  font-family: 'Black';
  font-size: 40px;
  line-height: 45px;
  color: ${Colors.white};
`

export const TextDescription = styled.Text`
  font-family: 'Italic';
  font-size: 15px;
  padding: ${Metrics.paddingTextDescription};
  color: ${Colors.description};
  line-height: 17px;
`
