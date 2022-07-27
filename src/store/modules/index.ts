import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { UserAuthInfoType } from '@src/core/types/auth-type'
import { HYDRATE } from 'next-redux-wrapper'

import auth from './auth'
import modal from './modal'
import layout from './layout'
import bottomSheet from './bottom-sheet'
import { ModalInfoType } from '@src/core/types/modal-type'
import { BottomSheetInfoType } from '@src/core/types/bottom-sheet-type'
import { LayoutInfoType } from '@src/core/types/layout-type'

export type RootStateType = CombinedState<{
  auth: UserAuthInfoType
  modal: ModalInfoType
  layout: LayoutInfoType
  bottomSheet: BottomSheetInfoType
}>
export type RootDispatchType = ReturnType<typeof reducer>['dispatch']

const reducer = (state: RootStateType, action: AnyAction) => {
  // connect ssr with csr
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return combineReducers({
    auth,
    modal,
    layout,
    bottomSheet,
  })(state, action)
}

export default reducer
