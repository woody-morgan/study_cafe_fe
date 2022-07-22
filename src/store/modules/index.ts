import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { UserAuthInfoType } from '@src/core/types/auth-type'
import { HYDRATE } from 'next-redux-wrapper'

import auth from './auth'
import history from './history'
import modal from './modal'
import bottomSheet from './bottom-sheet'
import { ModalInfoType } from '@src/core/types/modal-type'
import { HistoryInfoType } from '@src/core/types/history-type'
import { BottomSheetInfoType } from '@src/core/types/bottom-sheet-type'

export type RootStateType = CombinedState<{
  history: HistoryInfoType
  auth: UserAuthInfoType
  modal: ModalInfoType
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
    history,
    modal,
    bottomSheet,
  })(state, action)
}

export default reducer
