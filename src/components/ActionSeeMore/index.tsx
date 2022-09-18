import React from 'react'
import { CarsData } from '../../models/cars'
import { Container, ContainerTexts, TextDescription } from './style'

interface ActionSeeMoreProps {
  title: string
  description: string | number
}

const ActionSeeMore: React.FC<ActionSeeMoreProps> = ({
  description,
  title,
}) => {
  return (
    <Container style={{ elevation: 5 }}>
      <TextDescription>{title}</TextDescription>
      <ContainerTexts withMargin>
        {title === 'Price' && (
          <TextDescription isCurrency isDescription>
            R${' '}
          </TextDescription>
        )}

        <TextDescription numberOfLines={1} isDescription>
          {title === 'Price'
            ? String(description)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : description}
        </TextDescription>
      </ContainerTexts>
    </Container>
  )
}

export default ActionSeeMore
