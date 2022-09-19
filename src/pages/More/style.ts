import styled from 'styled-components/native'
import { Colors } from 'styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.bgMore};
  justify-content: space-between;
`

export const ContainerTop = styled.View``

export const TouchableItem = styled.TouchableOpacity`
  /* margin: 10px; */
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;
`

export const ContainerIcon = styled.View`
  margin-top: 3px;
  margin-left: 10px;
  margin-right: 10px;
`

export const ContainerTitle = styled.View``

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

export const ContainerVersion = styled.View`
  padding: 20px 20px 30px 20px;
  justify-content: center;
  align-items: center;
`
export const TextVersion = styled.Text`
  font-family: 'Italic';
  font-size: 12px;

  color: ${Colors.white};
`
