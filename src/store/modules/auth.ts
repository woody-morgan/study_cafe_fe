import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserAuthInfoType } from '@src/core/types/auth-type'

export const authInitialState: UserAuthInfoType = {
  isLoggedIn: false,
  userId: null,
  userName: null,
  userEmail: null,
  userAvatar: null,
  userToken: null,
  userNotifications: null,
}

// Todo: add login logic
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserAuthInfoType>) => {
      state.isLoggedIn = true
      state.userId = action.payload.userId
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
      state.userAvatar = action.payload.userAvatar
      state.userToken = action.payload.userToken
      state.userNotifications = action.payload.userNotifications
    },
    clearUserInfo: (state) => {
      state.isLoggedIn = false
      state.userId = null
      state.userName = null
      state.userEmail = null
      state.userAvatar = null
      state.userToken = null
      state.userNotifications = null
    },
  },
})

// Create Action
export const { setUserInfo, clearUserInfo } = authSlice.actions
// Reducer
export default authSlice.reducer
