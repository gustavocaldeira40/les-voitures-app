import React from 'react'
import { HeaderTitleProps } from '../../interfaces/header-title'
import { Container, TextDescription, TextSubTitle, TextTitle } from './style'

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  description,
  subTitle,
  style,
  hasHeader,
}) => {
  return (
    <Container style={style} hasHeader={hasHeader}>
      <TextSubTitle>{subTitle}</TextSubTitle>
      <TextTitle>{title}</TextTitle>
      <TextDescription>{description}</TextDescription>
    </Container>
  )
}

export default HeaderTitle
