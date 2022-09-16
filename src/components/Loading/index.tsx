import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../../styles/colors'

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <ActivityIndicator
      size="large"
      color={Colors.secondary}
    />
  )
}

export default Loading
