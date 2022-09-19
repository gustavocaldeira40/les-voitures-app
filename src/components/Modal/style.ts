import styled from 'styled-components/native'
import { Colors } from 'styles/colors'

export const Content = styled.View`
  min-height: 200px;
  max-height: 300px;
  margin: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`
export const ContainerMessage = styled.View`
  flex: 1;
`

export const ContainerClose = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 10px;
`

export const TextClose = styled.Text`
  font-family: 'Medium';
  font-size: 12px;
  text-transform: uppercase;
  color: ${Colors.TextClose};
`

export const TextContent = styled.Text`
  font-family: 'Medium';
  font-size: 15px;
  text-align: center;

  color: ${Colors.white};
`

export const ContainerButtons = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const TouchableCancel = styled.TouchableOpacity``

export const TextCancel = styled.Text`
  font-family: 'Regular';

  font-size: 15px;

  color: ${Colors.TextClose};
`
