import React from 'react'
import Button from '../../components/Button'
import { CarsData } from '../../models/cars'
import {
  Container,
  ContainerDescription,
  ContainerItem,
  Line,
  TextDescription,
  TextTitle,
} from './style'

interface CardProps {
  item: CarsData
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <Container activeOpacity={0.8}>
      <TextTitle>{item?.title}</TextTitle>
      <Line />

      <ContainerDescription>
        <ContainerItem>
          <TextDescription>Marca: </TextDescription>
          <TextDescription isDescription>{item?.brand}</TextDescription>
        </ContainerItem>
        <ContainerItem>
          <TextDescription>Price: </TextDescription>
          <TextDescription isDescription>{item?.price}</TextDescription>
        </ContainerItem>
        <ContainerItem>
          <TextDescription>Age: </TextDescription>
          <TextDescription isDescription>{item?.age}</TextDescription>
        </ContainerItem>
      </ContainerDescription>

      <Button margin="10px" secondary onPress={() => {}}>
        Editar
      </Button>
    </Container>
  )
}

export default Card
