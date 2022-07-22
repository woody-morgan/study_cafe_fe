import { Portal } from '@src/components/common'
import { ModalType } from '@src/core/types/modal-type'
import { FC } from 'react'

import ModalBase from './ModalBase'
import SignInModal from './content/SignInModal'
import SignUpModal from './content/SignUpModal'
import { useRootDispatch, useRootState } from '@src/hooks'
import { closeModal } from '@src/store/modules/modal'

const _selectModal: { [key in ModalType]: FC } = {
  SIGNUP: SignUpModal,
  SIGNIN: SignInModal,
}

const ModalContainer: FC = () => {
  const modal = useRootState((state) => state.modal)
  const dispatch = useRootDispatch()
  const ModalComponent = _selectModal[modal.name]

  return (
    <Portal selectorId="modal">
      <ModalBase
        title={modal.title}
        show={modal.name ? true : false}
        onClose={() => dispatch(closeModal())}
      >
        {modal.name && <ModalComponent />}
      </ModalBase>
    </Portal>
  )
}

export default ModalContainer
