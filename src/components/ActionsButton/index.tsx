import React from 'react'
import { TextDescription, Touchable } from './style'
import { TouchableOpacityProps } from 'react-native'

interface ActionsButtonProps extends TouchableOpacityProps {
  description: string
  icon: JSX.Element
  style?: any
}

const ActionsButton: React.FC<ActionsButtonProps> = ({
  icon,
  description,
  onPress,
  style,
}) => {
  return (
    <Touchable
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        shadowColor: '#dadada',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        ...style,
      }}
    >
      {icon}
      <TextDescription>{description}</TextDescription>
    </Touchable>
  )
}

export default ActionsButton
