import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const MainOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  align-items: stretch;
  bottom: 0;
  right: 0;
`
