import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { TextButton, Touchable } from './style'

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
  width?: string | number
  height?: string | number
  onPress: () => void
  secondary?: boolean
  margin?: string | number
  style?: any
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  height,
  width,
  onPress,
  secondary,
  margin,
  style,
  disabled,
}) => {
  return (
    <Touchable
      onPress={onPress}
      width={width}
      height={height}
      activeOpacity={0.5}
      secondary={secondary}
      margin={margin}
      style={style}
      disabled={disabled}
    >
      <TextButton secondary={secondary}>{children}</TextButton>
    </Touchable>
  )
}

export default Button
