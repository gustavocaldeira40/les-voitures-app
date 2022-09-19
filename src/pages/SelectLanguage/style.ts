import { Metrics } from 'styles/metricts'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: space-around;
`

export const ContaninerSelect = styled.View``

export const MainOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  align-items: stretch;
  bottom: 0;
  right: 0;
`

export const ContainerButton = styled.View`
  align-items: flex-end;
  padding: ${Metrics.padding};
`
