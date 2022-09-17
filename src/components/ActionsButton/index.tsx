import React from 'react'
import { TextDescription, Touchable } from './style'

interface ActionsButtonProps {
  description: string
  icon: JSX.Element
}

const ActionsButton: React.FC<ActionsButtonProps> = ({ icon, description }) => {
  return (
    <Touchable
      activeOpacity={0.8}
      style={{
        shadowColor: '#dadada',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
      }}
    >
      {icon}
      <TextDescription>{description}</TextDescription>
    </Touchable>
  )
}

export default ActionsButton
