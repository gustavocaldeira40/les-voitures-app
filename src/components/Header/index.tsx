import React, { useEffect, useRef, useState } from 'react'
import { Animated, TouchableWithoutFeedback, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import {
  Container,
  ContainerIcon,
  ContainerInformation,
  TextInformation,
  TextTitle,
} from './style'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../styles/colors'

interface HeaderProps {
  withoutLeftSide?: boolean
  title?: string
  withRightSide?: boolean
}

const Header: React.FC<HeaderProps> = ({
  withoutLeftSide,
  title,
  withRightSide,
}) => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */
  const fadeAnim = useRef(new Animated.Value(0)).current

  /*
   *   STATES
   */
  const [showInformation, setShowInformation] = useState(false)

  /*
   *   HOOKS
   */
  const navigation = useNavigation()

  /*
   *   ANIMATION
   */

  const changeShowMenu = () => {
    if (!showInformation) {
      setShowInformation(true)

      // Fade for open
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start()
    } else {
      setShowInformation(false)

      // Fade for close
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start()
    }
  }

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */

  /*
   *   EFFECTS
   */

  return (
    <Container>
      {withoutLeftSide ? null : (
        <TouchableWithoutFeedback
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        >
          <SimpleLineIcons
            name="arrow-left"
            size={16}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </TouchableWithoutFeedback>
      )}

      {title && <TextTitle withRightSide={withRightSide}>{title}</TextTitle>}

      {withRightSide && (
        <ContainerIcon
          hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
          onPress={() => changeShowMenu()}
          activeOpacity={0.8}
        >
          <AntDesign name="exclamationcircleo" size={20} color={Colors.white} />
        </ContainerIcon>
      )}

      {showInformation && (
        <ContainerInformation style={{ opacity: fadeAnim }}>
          <TextInformation>Imagem meramente ilustrativa</TextInformation>
        </ContainerInformation>
      )}
    </Container>
  )
}

export default Header
