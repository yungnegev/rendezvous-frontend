import { Card, Form, Row, Typography } from 'antd'
import Layout from '../../components/layout'
import PasswordInput from '../../components/passwordInput'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../lib/paths'
import { UserData, useLoginMutation } from '../../services/auth'
import { isErrorWithMessage } from '../../lib/utils'
import { useState } from 'react'
import CustomError from '../../components/customError'

const Login = () => {

  const navigate = useNavigate()
  const [loginUser, loginUserResult] = useLoginMutation()
  const [error, setError] = useState('')

  const onLogin = async (data: UserData) => {
    try {
       await loginUser(data).unwrap()
       navigate('/')
    } catch (err) {
      const potentialError = isErrorWithMessage(err)

      if (potentialError) {
        setError(err.data.message)
      } else {
        setError('Unknown error')
      }
    }
  }

  return (
    <Layout>
      <Row justify={'center'}>
         <Card title='Login' style={{ width: "30rem" }}>
          <Form onFinish={onLogin}>
              <CustomInput name='email' placeholder='email' type='email'/>
              <PasswordInput name='password' placeholder='password' />
              <Form.Item>
                <CustomButton type='primary' htmlType='submit'>Login</CustomButton>
              </Form.Item>
          </Form>
            <Typography.Text>Don't have an account? <Link to={Paths.register}>Register</Link></Typography.Text>
            <CustomError message={error} />
         </Card>
      </Row>
    </Layout>
  )
}

export default Login