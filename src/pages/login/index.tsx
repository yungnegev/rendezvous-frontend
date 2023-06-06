import { Card, Form, Row, Typography } from 'antd'
import Layout from '../../components/layout'
import PasswordInput from '../../components/passwordInput'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { Link } from 'react-router-dom'
import { Paths } from '../../lib/paths'

const Login = () => {
  return (
    <Layout>
      <Row justify={'center'}>
         <Card title='Login' style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
              <CustomInput name='email' placeholder='email' type='email'/>
              <PasswordInput name='password' placeholder='password' />
              <Form.Item>
                <CustomButton type='primary' htmlType='submit'>Login</CustomButton>
              </Form.Item>
          </Form>
            <Typography.Text>Don't have an account? <Link to={Paths.register}>Register</Link></Typography.Text>
         </Card>
      </Row>
    </Layout>
  )
}

export default Login