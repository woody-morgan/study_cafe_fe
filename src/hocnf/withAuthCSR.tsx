import useValidateUser from '@src/hooks/useValidateUser'

const withAuthClientSide = (Component: any) => {
  const HOCComponent = (props) => {
    useValidateUser()
    return <Component {...props} />
  }
  return HOCComponent
}

export default withAuthClientSide
