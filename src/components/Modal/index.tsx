import React from 'react'
import Button from '../../components/Button'
import { Dimensions, TouchableOpacity } from 'react-native'

import Modal from 'react-native-modal'
import {
  ContainerButtons,
  ContainerClose,
  ContainerMessage,
  Content,
  TextCancel,
  TextClose,
  TextContent,
  TouchableCancel,
} from './style'
import { translate } from '../../services/i18n'

interface ModalProps {
  visible: boolean
  message: string
  handleClose: () => void
  handleOk: () => void
  textCancelButton?: string
}

const { width, height } = Dimensions.get('screen')

const ModalDefault: React.FC<ModalProps> = ({
  visible,
  message,
  handleClose,
  textCancelButton,
  handleOk,
}) => {
  return (
    <Modal
      deviceHeight={height}
      deviceWidth={width}
      isVisible={visible}
      statusBarTranslucent
      backdropOpacity={0.1}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      hideModalContentWhileAnimating
    >
      <Content>
        <ContainerClose>
          <TouchableOpacity
            hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
            onPress={() => handleClose()}
          >
            <TextClose>{translate('Close')}</TextClose>
          </TouchableOpacity>
        </ContainerClose>
        <ContainerMessage>
          <TextContent>{message}</TextContent>
        </ContainerMessage>
        <ContainerButtons>
          <TouchableCancel onPress={() => handleClose()}>
            <TextCancel>{textCancelButton || translate('Cancel')}</TextCancel>
          </TouchableCancel>
          <Button
            secondary
            width="116px"
            height="34px"
            onPress={() => handleOk()}
          >
            {translate('Yes')}
          </Button>
        </ContainerButtons>
      </Content>
    </Modal>
  )
}

export default ModalDefault
