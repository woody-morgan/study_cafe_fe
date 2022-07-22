export type NotiType = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO'

export type NotiShape = {
  type: NotiType
  id: number
  title: string
  message: string
}
