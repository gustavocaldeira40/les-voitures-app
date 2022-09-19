import styled from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from 'styles/colors'
import { Animated } from 'react-native'

export const Container = styled.View`
  background-color: ${Colors.primary};
  flex: 1;
  align-items: center;
  position: relative;
`

export const MainOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  align-items: stretch;
  bottom: 0;
  right: 0;
`

export const ContainerLogo = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  width: 300px;
  height: 300px;
`

export const ContainerLoading = styled.View`
  min-height: 10%;
  padding: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`
