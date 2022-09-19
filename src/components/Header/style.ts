import { height, Metrics, statusBarHeight } from 'styles/metricts'
import styled from 'styled-components/native'
import { Colors } from 'styles/colors'
import { Animated } from 'react-native'

export const Container = styled(Animated.View)`
  padding: ${statusBarHeight + 20}px 10px 20px 10px;
  align-items: center;
  flex-direction: row;
  position: relative;
  z-index: 5;
`

export const TextTitle = styled.Text<any>`
  font-family: 'Black';
  font-size: 25px;
  flex: 1;
  margin-left: ${(props) => (props.withRightSide ? '30px' : 0)};
  margin-right: ${(props) => (!props.withRightSide ? '10px' : 0)};
  text-align: center;

  color: ${Colors.white};
`

export const ContainerIcon = styled.TouchableOpacity`
  margin: 0 10px;
`

export const ContainerInformation = styled(Animated.View)`
  background: rgba(0, 0, 0, 0.6);
  border-top-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  position: absolute;
  min-width: 50%;
  right: 60px;
  top: 80px;
  right: 40px;
`

export const TextInformation = styled.Text`
  font-family: 'LightItalic';
  font-size: 12px;
  text-align: center;

  color: ${Colors.white};
`
