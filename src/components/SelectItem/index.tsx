
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Brazil, English, French } from '../Icon'
import { Container, ImageFlag, TextDescription } from './style'

interface SelectItemProps {
  source: string
  description: string
  isFocused: boolean
  onPress: () => void
}
const SelectItem: React.FC<SelectItemProps> = ({
  description,
  source,
  isFocused,
  onPress,
}) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Container onPress={onPress} isFocused={isFocused} activeOpacity={0.8}>
        <ImageFlag source={source} />

        <TextDescription isFocused={isFocused}>{description}</TextDescription>
      </Container>
    </>
  )
}

export default SelectItem
