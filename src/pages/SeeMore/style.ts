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

export const ContainerArea = styled.View`
  justify-content: center;
  z-index: 20;
  align-items: center;
`

export const ImageCar = styled.Image`
  width: 310px;
  height: 160px;

  top: 30px;
`

export const ContainerLinear = styled.View`
  flex: 1;
  background: blue;
  position: relative;
  overflow: hidden;
  border-top-right-radius: 50px;
  border-top-left-radius: 10px;
`

export const ContainerDescription = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 50px;
`

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const OverlaySquare = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  align-items: stretch;
  bottom: 0;
  right: 0;
`
