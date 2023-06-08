import { useCurrentQuery } from '../../services/auth'

const AuthWrapper = ({ children }: {children: JSX.Element}) => {

  const { isLoading } = useCurrentQuery()  
  
  if (isLoading) return <span>Loading...</span>  

  return children
}

export default AuthWrapper