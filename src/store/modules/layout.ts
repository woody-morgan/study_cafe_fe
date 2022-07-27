import { createSlice } from '@reduxjs/toolkit'
import { LayoutInfoType } from '@src/core/types/layout-type'

export const layoutInitialState: LayoutInfoType = {
  isShowBottomNav: true,
  pageTransitionDir: 'forward',
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState: layoutInitialState,
  reducers: {
    showBottomNav: (state) => {
      state.isShowBottomNav = true
    },
    hideBottomNav: (state) => {
      state.isShowBottomNav = false
    },
    pageTransitionForward: (state) => {
      state.pageTransitionDir = 'forward'
    },
    pageTransitionBackward: (state) => {
      state.pageTransitionDir = 'backward'
    },
  },
})

// Create Action
export const { showBottomNav, hideBottomNav, pageTransitionForward, pageTransitionBackward } =
  layoutSlice.actions
// Reducer
export default layoutSlice.reducer
