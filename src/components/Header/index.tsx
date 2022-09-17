import React from 'react'
import { View } from 'react-native'
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
        <SimpleLineIcons
          name="arrow-left"
          size={20}
          color="white"
          onPress={() => navigation.goBack()}
        />
      )}

      {title && <TextTitle>{title}</TextTitle>}
    </Container>
  )
}

export default Header
