import React from 'react'
import { Container, NoImage, TextNoItem } from './style'

import NoIcon from 'assets/visual/icon-compressed.png'
import { translate } from 'services/i18n'

interface NoItemProps {
  message?: string
}

const NoItem: React.FC<NoItemProps> = ({ message }) => {
  return (
    <Container>
      <NoImage source={NoIcon} resizeMode="contain" />
      <TextNoItem>{message || translate('No Content')}</TextNoItem>
    </Container>
  )
}

export default NoItem
