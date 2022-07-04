import { atom, selector } from 'recoil'
import { produce } from 'immer'
import { NotiShape } from '@src/core/interface/noti-type'

export type AuthShape = {
  isLoggedIn: boolean
  userId: string | null
  userName: string | null
  userEmail: string | null
  userAvatar: string | null
  userToken: string | null
  userNotifications: NotiShape[] | null
}

const authInitialState: AuthShape = {
  isLoggedIn: false,
  userId: null,
  userName: null,
  userEmail: null,
  userAvatar: null,
  userToken: null,
  userNotifications: null,
}

const authState = atom<AuthShape>({
  key: 'authState',
  default: authInitialState,
})

// set user info as globally immutable
const authSelector = selector({
  key: 'authSelector',
  // add custom getter later
  get: ({ get }) => get(authState),
  set: ({ set }, newValue) =>
    set(
      authState,
      produce(newValue, (draft) => draft)
    ),
})

export { authInitialState, authState, authSelector }
