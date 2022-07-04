import { atom, selector } from 'recoil'

export type LayoutShape = {
  title: string | null
}

const layoutInitialState: LayoutShape = {
  title: 'Welcome to Study Cafe',
}

const layoutState = atom<LayoutShape>({
  key: 'layoutState',
  default: layoutInitialState,
})

const modalSelector = selector({
  key: 'layoutStateSelector',
  // add custom getter later
  get: ({ get }) => get(layoutState),
})

export { layoutInitialState, layoutState, modalSelector }
