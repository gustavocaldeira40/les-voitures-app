import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { Colors } from '../../styles/colors'

interface LoadingSpinnerProps {
  show: boolean
  text?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ show, text }) => {
  return (
    <Spinner
      visible={show}
      size={50}
      animation="fade"
      textContent={text || 'Loading...'}
      textStyle={{ color: Colors.white }}
    />
  )
}

export default LoadingSpinner
