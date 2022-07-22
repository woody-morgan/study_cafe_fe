export type SignInModal = 'SIGNIN'
export type SignUpModal = 'SIGNUP'

export type ModalType = SignInModal | SignUpModal

export type ModalInfoType = {
  name: ModalType | null
  title: string | null
  option?: unknown
}
