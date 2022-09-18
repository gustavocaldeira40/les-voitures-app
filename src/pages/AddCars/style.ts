import styled from 'styled-components/native'
import { Metrics } from './../../styles/metricts'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View`
  position: relative;
  flex: 1;
`

export const ContainerTop = styled.View``

export const MainOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  align-items: stretch;
  bottom: 0;
  right: 0;
`

export const ContainerInputs = styled.View`
  margin-top: 20px;
`

export const ContainerButton = styled.View`
  align-items: flex-end;
  padding: ${Metrics.paddingBottom};
`
