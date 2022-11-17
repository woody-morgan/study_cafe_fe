import { atom, DefaultValue, selector } from 'recoil';

export type SignInModal = 'SIGNIN';
export type SignUpModal = 'SIGNUP';

export type ModalType = SignInModal | SignUpModal;

export interface ModalInfoType {
  type: ModalType | null;
  fullScreen?: boolean;
  option?: unknown;
}

export type ModalContentType = {
  option?: unknown;
};

const defaultState: ModalInfoType = {
  type: null,
  fullScreen: true,
  option: null,
};

const modalStateAtom = atom<ModalInfoType>({
  key: 'modalStateAtom',
  default: defaultState,
});

const openSignInModal = selector<Pick<ModalInfoType, 'fullScreen'>>({
  key: 'modalStateAtom/open/signin',
  get: ({ get }) => {
    return get(modalStateAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(modalStateAtom, defaultState);
    } else {
      set(modalStateAtom, {
        type: 'SIGNIN',
        fullScreen: true,
        option: newValue,
      });
    }
  },
});

const openSignUpModal = selector<Pick<ModalInfoType, 'fullScreen'>>({
  key: 'modalStateAtom/open/signup',
  get: ({ get }) => {
    return get(modalStateAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(modalStateAtom, defaultState);
    } else {
      set(modalStateAtom, {
        type: 'SIGNUP',
        fullScreen: true,
        option: newValue,
      });
    }
  },
});

const closeModal = selector<void>({
  key: 'modalStateAtom/close',
  get: ({ get }) => {
    return;
  },
  set: ({ set }) => {
    set(modalStateAtom, defaultState);
  },
});

export { closeModal, modalStateAtom, openSignInModal, openSignUpModal };
