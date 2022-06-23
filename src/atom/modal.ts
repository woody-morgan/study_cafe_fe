import { ModalType } from '@src/core/interface/modal-type'
import { atom, selector } from 'recoil'

export type ModalShape = {
  name: ModalType | null
  title: string | null
  option?: unknown
}

const modalInitialState: ModalShape = {
  name: null,
  title: null,
  option: null,
}

const modalState = atom<ModalShape>({
  key: 'modalState',
  default: modalInitialState,
})

const modalSelector = selector({
  key: 'modalSelector',
  // add custom getter later
  get: ({ get }) => get(modalState),
})

export { modalInitialState, modalState, modalSelector }
