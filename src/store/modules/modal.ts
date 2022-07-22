import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalInfoType } from '@src/core/types/modal-type'

export const modalInitialState: ModalInfoType = {
  name: null,
  title: null,
  option: null,
}

// Todo: add function representative reducers
const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalInfoType>) => {
      state.name = action.payload.name
      state.title = action.payload.title
      state.option = action.payload.option
    },
    closeModal: (state) => {
      state.name = null
      state.title = null
      state.option = null
    },
  },
})

// Create Action
export const { setModal, closeModal } = modalSlice.actions
// Reducer
export default modalSlice.reducer
