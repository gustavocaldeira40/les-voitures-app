import styled from 'styled-components/native'
import { statusBarHeight } from 'styles/metricts'
import { Colors } from 'styles/colors'
import { Animated } from 'react-native'

export const Container = styled(Animated.View)`
  padding: ${statusBarHeight + 20}px 10px 20px 10px;
  /* background: blue; */
  margin-bottom: 50px;
`

export const TextTitle = styled.Text`
  font-family: 'Black';
  font-size: 25px;

  text-align: center;

  color: ${Colors.white};
`
