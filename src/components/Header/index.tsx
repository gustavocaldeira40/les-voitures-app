import React, { useEffect, useRef } from 'react'
import { Animated, TouchableWithoutFeedback, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Container, TextTitle } from './style'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  withoutLeftSide?: boolean
  title?: string
}
const Header: React.FC<HeaderProps> = ({ withoutLeftSide, title }) => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */
  const translation = useRef(new Animated.Value(-100)).current

  /*
   *   HOOKS
   */
  const navigation = useNavigation()

  /*
   *   LAYOUT
   */

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

      {title && <TextTitle>{title}</TextTitle>}
    </Container>
  )
}

export default Header
