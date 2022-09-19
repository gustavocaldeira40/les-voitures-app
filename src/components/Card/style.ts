import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { Colors } from 'styles/colors'

export const Container = styled.View`
  background: ${Colors.bgCard};
  border: 1px solid #ffffff;
  margin: 10px;
  border-radius: 20px;
`

export const Line = styled.View`
  border: 0.5px solid #969696;
  width: 100%;
`

export const TextTitle = styled.Text`
  font-family: 'Bold';
  font-size: 25px;
  text-align: center;
  padding: 10px;

  color: ${Colors.white};
`

export const ContainerDescription = styled.View`
  padding: 10px;
`

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const TextDescription = styled.Text<any>`
  font-family: ${(props) => (props.isDescription ? 'Italic' : 'Bold')};
  margin-left: ${(props) => (props.isDescription ? 10 : 0)}px;
  font-size: 10px;
  text-transform: ${(props) => (props.isDescription ? 'none' : 'uppercase')};
  color: ${(props) => (props.isDescription ? Colors.LightDark : Colors.white)};
`

export const ContainerActions = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 14%;
`

export const ContainerDots = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid #ffffff;
  padding: 10px;
  border-radius: 20px;
  margin-left: 20px;
  position: relative;
`

export const ContainerMenu = styled(Animated.View)`
  border: 0.5px solid #ffffff;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  /* padding: 20px 40px; */
  position: absolute;
  right: 50px;
  bottom: 50px;
`

export const ContainerItemMenu = styled.TouchableOpacity`
  padding: 10px 40px;
  align-items: center;
  flex-direction: row;
`

export const TextMenu = styled.Text`
  font-family: 'Medium';
  font-size: 10px;
  margin: 10px;
  flex: 1;
  text-align: center;
  color: ${Colors.white};
`
