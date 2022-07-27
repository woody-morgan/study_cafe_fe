import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BottomSheetInfoType } from '@src/core/types/bottom-sheet-type'

/**
 * @param {boolean} isOpen - Whether the sheet is open or not
 * @param {boolean} activeOverlay - Whether close the portal when click outside of the sheet
 * @param {unknown[] | null} option - The options for the sheet content
 */
const bottomSheetInitialState: BottomSheetInfoType = {
  isOpen: false,
  name: null,
  activeOverlay: false,
  option: null,
}

// Todo: add function representative reducers
const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState: bottomSheetInitialState,
  reducers: {
    openBottomSheet: (state, action: PayloadAction<Omit<BottomSheetInfoType, 'isOpen'>>) => {
      state.isOpen = true
      state.name = action.payload.name
      state.activeOverlay = action.payload.activeOverlay
      state.option = action.payload.option
    },
    closeBottomSheet: (state) => {
      state.isOpen = false
      state.activeOverlay = false
      state.option = null
    },
  },
})

// Create Action
export const { openBottomSheet, closeBottomSheet } = bottomSheetSlice.actions
// Reducer
export default bottomSheetSlice.reducer