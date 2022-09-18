import styled from 'styled-components/native'
import { Colors } from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.bgMore};
`

export const TouchableItem = styled.TouchableOpacity`
  margin: 10px;
  flex-direction: row;
  align-items: flex-start;
`

export const ContainerIcon = styled.View`
  margin-top: 12px;
  margin-left: 10px;
  margin-right: 10px;
`

export const ContainerTitle = styled.View`
  padding: 10px;
`

export const TextTitle = styled.Text`
  font-family: 'Bold';
  font-size: 20px;
  line-height: 27px;
  color: ${Colors.white};
`

export const TextDescription = styled.Text`
  font-family: 'Medium';
  font-size: 12px;
  line-height: 16px;
  width: 200px;
  margin-left: 2px;
  color: ${Colors.icon}88;
`

export const Line = styled.View`
  width: 100%;
  border: 0.2px solid ${Colors.icon};
`
