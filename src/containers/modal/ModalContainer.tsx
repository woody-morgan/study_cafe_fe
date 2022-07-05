import { modalInitialState, modalState } from '@src/atom/modalAtom'
import { Portal } from '@src/components/common'
import { ModalType } from '@src/core/interface/modal-type'
import { FC } from 'react'
import { useRecoilState } from 'recoil'

import ModalBase from './ModalBase'
import SignInModal from './content/SignInModal'
import SignUpModal from './content/SignUpModal'

const selectRenderingModal: { [keys in ModalType]: JSX.Element } = {
  SIGNUP: <SignUpModal />,
  SIGNIN: <SignInModal />,
}

const ModalContainer: FC = () => {
  const [modal, setModal] = useRecoilState(modalState)

  return (
    <Portal selectorId="modal">
      <ModalBase
        title={modal.title}
        show={modal.name ? true : false}
        onClose={() => setModal({ ...modalInitialState })}
      >
        {modal.name && selectRenderingModal[modal.name]}
      </ModalBase>
    </Portal>
  )
}

export default ModalContainer
