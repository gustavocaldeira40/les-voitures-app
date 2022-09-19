import styled from 'styled-components/native'
import { Metrics } from './../../styles/metricts'
import { LinearGradient } from 'expo-linear-gradient'
import { KeyboardAvoidingView } from 'react-native'
import { Colors } from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  position: relative;
  /* justify-content: space-around; */
`

export const ContainerTop = styled.View`
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

export const ContainerButton = styled.View`
  align-items: flex-end;
  padding: ${Metrics.paddingBottom};
`
