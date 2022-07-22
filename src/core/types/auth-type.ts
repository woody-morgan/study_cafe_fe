import { NotiShape } from '@src/core/types/noti-type'

export type UserAuthInfoType = {
  isLoggedIn: boolean
  userId: string | null
  userName: string | null
  userEmail: string | null
  userAvatar: string | null
  userToken: string | null
  userNotifications: NotiShape[] | null
}
