import React from 'react'
import { Container, NoImage, TextNoItem } from './style'

import NoIcon from '../../assets/visual/icon-compressed.png'

interface NoItemProps {
  message?: string
}

const NoItem: React.FC<NoItemProps> = ({ message }) => {
  return (
    <Container>
      <NoImage source={NoIcon} resizeMode="contain" />
      <TextNoItem>{message || 'Sem Conteúdo'}</TextNoItem>
    </Container>
  )
}

export default NoItem
