import { atom, DefaultValue, selector } from 'recoil';

export type SignInModal = 'SIGNIN';
export type SignUpModal = 'SIGNUP';
export type CafeInfoModal = 'CAFEINFO';
export type TodolistModal = 'TODOLIST';
export type TodolistShowModal = 'TODOLISTSHOW';

export type ModalType =
  | SignInModal
  | SignUpModal
  | CafeInfoModal
  | TodolistModal
  | TodolistShowModal;

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

const openCafeInfoModal = selector<Pick<ModalInfoType, 'fullScreen'>>({
  key: 'modalStateAtom/open/cafeInfo',
  get: ({ get }) => {
    return get(modalStateAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(modalStateAtom, defaultState);
    } else {
      set(modalStateAtom, {
        type: 'CAFEINFO',
        fullScreen: newValue.fullScreen,
        option: newValue,
      });
    }
  },
});

const openTodolistModal = selector<Pick<ModalInfoType, 'fullScreen'>>({
  key: 'modalStateAtom/open/todolist',
  get: ({ get }) => {
    return get(modalStateAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(modalStateAtom, defaultState);
    } else {
      set(modalStateAtom, {
        type: 'TODOLIST',
        fullScreen: newValue.fullScreen,
        option: newValue,
      });
    }
  },
});

const openTodolistShowModal = selector<Pick<ModalInfoType, 'fullScreen'>>({
  key: 'modalStateAtom/open/todolistshow',
  get: ({ get }) => {
    return get(modalStateAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(modalStateAtom, defaultState);
    } else {
      set(modalStateAtom, {
        type: 'TODOLISTSHOW',
        fullScreen: newValue.fullScreen,
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

export {
  closeModal,
  modalStateAtom,
  openSignInModal,
  openSignUpModal,
  openCafeInfoModal,
  openTodolistModal,
  openTodolistShowModal,
};
