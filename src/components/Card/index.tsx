import React, { useRef, useState } from 'react'
import { Dots } from 'components/Icon'
import Button from 'components/Button'
import { CarsData } from 'models/cars'
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
import { Colors } from 'styles/colors'
import ModalDefault from 'components/Modal'
import { FontAwesome5 } from '@expo/vector-icons'
import { Animated, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { translate } from 'services/i18n'

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
  const navigation = useNavigation<any>()

  /*
   *   LAYOUT
   */

  /*
   *   ANIMATION
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

  const handleEdit = (item: CarsData) => {
    navigation.navigate('AddCars', { item })
  }

  const handleSeeMore = (item: CarsData) => {
    if (item?._id) {
      navigation.navigate('SeeMore', { id: item?._id })
    }
  }

  /*
   *   EFFECTS
   */

  return (
    <>
      <ModalDefault
        message={translate('Are you sure you want to delete this Vehicle?')}
        visible={showModalDelete}
        handleClose={() => setShowModalDelete(false)}
        handleOk={() => changeRemoveCar(item)}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          setShowMenu(false)
          if (showMenu) {
            changeShowMenu()
          }
        }}
      >
        <Container
          style={{
            elevation: 2,
            shadowOffset: { width: -2, height: 4 },
            shadowColor: '#fff',
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <TextTitle numberOfLines={1}>{item?.title}</TextTitle>
          <Line />

          <ContainerDescription>
            <ContainerItem>
              <TextDescription>{translate('Brand')}: </TextDescription>
              <TextDescription isDescription>{item?.brand}</TextDescription>
            </ContainerItem>
            <ContainerItem>
              <TextDescription>{translate('Price')}: </TextDescription>
              <TextDescription isDescription>{item?.price}</TextDescription>
            </ContainerItem>
            <ContainerItem>
              <TextDescription>{translate('Year')}: </TextDescription>
              <TextDescription isDescription>{item?.age}</TextDescription>
            </ContainerItem>
          </ContainerDescription>
          <ContainerActions>
            <Button
              height="40px"
              width="70%"
              margin="15px 0"
              secondary
              onPress={() => {
                handleEdit(item)
              }}
            >
              {translate('Edit')}
            </Button>
            <ContainerDots onPress={() => changeShowMenu()}>
              <Dots name="dots" color={Colors.icon} size={15} />
            </ContainerDots>

            {showMenu && (
              <ContainerMenu style={{ opacity: fadeAnim }}>
                <ContainerItemMenu onPress={() => handleSeeMore(item)}>
                  <FontAwesome5 name="eye" size={15} color={Colors.icon} />
                  <TextMenu>{translate('See More')}</TextMenu>
                </ContainerItemMenu>
                <ContainerItemMenu onPress={() => setShowModalDelete(true)}>
                  <FontAwesome5
                    name="trash"
                    size={15}
                    color={Colors.secondary}
                  />
                  <TextMenu>{translate('Delete')}</TextMenu>
                </ContainerItemMenu>
              </ContainerMenu>
            )}
          </ContainerActions>
        </Container>
      </TouchableWithoutFeedback>
    </>
  )
}

export default Card
