import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Dots } from '../../components/Icon'
import Button from '../../components/Button'
import { CarsData } from '../../models/cars'
import {
  Container,
  ContainerActions,
  ContainerDescription,
  ContainerDots,
  ContainerItem,
  ContainerItemMenu,
  ContainerMenu,
  Line,
  TextDescription,
  TextMenu,
  TextTitle,
} from './style'
import { Colors } from '../../styles/colors'
import ModalDefault from '../../components/Modal'
import { FontAwesome5 } from '@expo/vector-icons'
import { Animated } from 'react-native'

interface CardProps {
  item: CarsData
  changeRemoveCar: (item: CarsData) => void
}

const Card: React.FC<CardProps> = ({ item, changeRemoveCar }) => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */

  const [showModalDelete, setShowModalDelete] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  /*
   *   HOOKS
   */

  /*
   *   LAYOUT
   */

  /*
   *   ANIMATINO
   */

  const fadeAnim = useRef(new Animated.Value(0)).current

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */
  const changeShowMenu = () => {
    if (!showMenu) {
      setShowMenu(true)

      // Fade for open
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
    } else {
      setShowMenu(false)

      // Fade for close
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start()
    }
  }

  /*
   *   EFFECTS
   */

  return (
    <>
      <ModalDefault
        message="Tem Certeza que deseja apagar esse Veículo ?"
        visible={showModalDelete}
        handleClose={() => setShowModalDelete(false)}
        handleOk={() => {}}
      />

      <Container>
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
        <ContainerActions>
          <Button
            height="40px"
            width="70%"
            margin="15px 0"
            secondary
            onPress={() => {}}
          >
            Editar
          </Button>
          <ContainerDots
            onBlur={() => setShowMenu(false)}
            onPress={() => changeShowMenu()}
          >
            <Dots name="dots" color={Colors.icon} size={15} />
          </ContainerDots>

          <ContainerMenu style={{ opacity: fadeAnim }}>
            <ContainerItemMenu>
              <FontAwesome5 name="eye" size={15} color={Colors.icon} />
              <TextMenu>Ver mais</TextMenu>
            </ContainerItemMenu>
            <ContainerItemMenu onPress={() => changeRemoveCar(item)}>
              <FontAwesome5 name="trash" size={15} color={Colors.secondary} />
              <TextMenu>Apagar</TextMenu>
            </ContainerItemMenu>
          </ContainerMenu>
        </ContainerActions>
      </Container>
    </>
  )
}

export default Card
