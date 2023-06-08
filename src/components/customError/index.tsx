import { Alert } from 'antd'

interface CustomErrorProps {
    message?: string
}

const CustomError = ({ message }: CustomErrorProps) => {

  if (!message) return null  

  return <Alert type='error' message={message} />
}

export default CustomError