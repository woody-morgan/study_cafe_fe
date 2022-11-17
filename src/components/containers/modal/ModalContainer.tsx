import { Portal } from '@src/components/ui/atom';
import { FunctionComponent } from 'react';

import ModalBase from './ModalBase';
import SignInModal from './content/SignInModal';
import SignUpModal from './content/SignUpModal';
import CafeInfoModal from './content/CafeInfoModal';
import { closeModal, modalStateAtom, ModalType } from '@src/atom/modal';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const _selectModal: { [key in ModalType]: FunctionComponent } = {
  SIGNUP: SignUpModal,
  SIGNIN: SignInModal,
  CAFEINFO: CafeInfoModal,
};

const ModalContainer: FunctionComponent = () => {
  const closeModalCB = useSetRecoilState(closeModal);
  const { type } = useRecoilValue(modalStateAtom);
  let ModalComponent = null;

  if (type) {
    ModalComponent = _selectModal[type];
  }

  return (
    <Portal selectorId="modal">
      <ModalBase show={type ? true : false} onClose={() => closeModalCB()}>
        {ModalComponent && <ModalComponent />}
      </ModalBase>
    </Portal>
  );
};

export default ModalContainer;
