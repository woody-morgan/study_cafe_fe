import { modalInitialState, modalState } from '@src/atom/modalAtom'
import { Portal } from '@src/components/common'
import { ModalType } from '@src/core/interface/modal-type'
import { FC } from 'react'
import { useRecoilState } from 'recoil'

import ModalBase from './ModalBase'
import SignInModal from './content/SignInModal'
import SignUpModal from './content/SignUpModal'

const _selectModal: { [key in ModalType]: FC } = {
  SIGNUP: SignUpModal,
  SIGNIN: SignInModal,
}

const ModalContainer: FC = () => {
  const [modal, setModal] = useRecoilState(modalState)
  const ModalComponent = _selectModal[modal.name]

  return (
    <Portal selectorId="modal">
      <ModalBase
        title={modal.title}
        show={modal.name ? true : false}
        onClose={() => setModal({ ...modalInitialState })}
      >
        {modal.name && <ModalComponent />}
      </ModalBase>
    </Portal>
  )
}

export default ModalContainer
