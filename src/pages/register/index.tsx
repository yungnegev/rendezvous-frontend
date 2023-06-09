import { Card, Form, Row, Typography } from 'antd'
import Layout from '../../components/layout'
import PasswordInput from '../../components/passwordInput'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../lib/paths'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'
import { useState } from 'react'
import { useRegisterMutation } from '../../services/auth'
import { User } from '../../lib/types'
import { isErrorWithMessage } from '../../lib/utils'
import CustomError from '../../components/customError'

type RegisterData = Omit<User, 'id'> & { confirmPassword: string }

const Register = () => {

  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [error, setError] = useState('')
  const [registeruser] = useRegisterMutation()

  const register = async (data: RegisterData) => {
    try {
      await registeruser(data).unwrap()
      navigate(Paths.home)
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
         <Card title='Register' style={{ width: "30rem" }}>
          <Form onFinish={register}>
              <CustomInput name='name' placeholder='name' type='text'/>
              <CustomInput name='email' placeholder='email' type='email'/>
              <PasswordInput name='password' placeholder='password' />
              <PasswordInput name='confirmPassword' placeholder='password' />
              <Form.Item>
                <CustomButton type='primary' htmlType='submit'>Register</CustomButton>
              </Form.Item>
          </Form>
            <Typography.Text>Already have an account? <Link to={Paths.login}>Login</Link></Typography.Text>
            <CustomError message={error} /> 
         </Card>
      </Row>
    </Layout>
  )
}

export default Register