import React from 'react'
import { HeaderTitleProps } from '../../interfaces/header-title'
import { Container, TextDescription, TextSubTitle, TextTitle } from './style'

// import { Container } from './styles';

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  description,
  subTitle,
}) => {
  return (
    <Container>
      <TextSubTitle>{subTitle}</TextSubTitle>
      <TextTitle>{title}</TextTitle>
      <TextDescription>{description}</TextDescription>
    </Container>
  )
}

export default HeaderTitle
