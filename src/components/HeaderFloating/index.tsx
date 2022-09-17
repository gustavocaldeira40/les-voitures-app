import React, { useEffect, useRef } from 'react'
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Container, TextTitle } from './style'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../styles/colors'

interface HeaderFloatingProps {
  withoutLeftSide?: boolean
  title?: string
  headerShown?: boolean
  onPress?: () => void
}

const HeaderFloating: React.FC<HeaderFloatingProps> = ({
  withoutLeftSide,
  title,
  headerShown,
  onPress,
}) => {
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

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }, [headerShown])

  return (
    <Container
      style={[
        {
          transform: [{ translateY: translation }],
        },

        styles.containerHeader,
      ]}
    >
      {withoutLeftSide ? null : (
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: `${Colors.primary}99`,
            borderWidth: 1,
            borderColor: Colors.white,
            padding: 10,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
        >
          <SimpleLineIcons name="arrow-left" size={16} color="white" />
        </TouchableOpacity>
      )}

      {title && <TextTitle>{title}</TextTitle>}
    </Container>
  )
}

const styles = StyleSheet.create({
  containerHeader: {
    position: 'absolute',
    width: '100%',
    zIndex: 200,
    top: -10,
    alignItems: 'flex-start',
  },
})

export default HeaderFloating
