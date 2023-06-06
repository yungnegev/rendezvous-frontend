import { Card, Form, Row, Typography } from 'antd'
import Layout from '../../components/layout'
import PasswordInput from '../../components/passwordInput'
import CustomInput from '../../components/customInput'
import CustomButton from '../../components/customButton'
import { Link } from 'react-router-dom'
import { Paths } from '../../lib/paths'

const Register = () => {
  return (
    <Layout>
      <Row justify={'center'}>
         <Card title='Register' style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
              <CustomInput name='name' placeholder='name' type='text'/>
              <CustomInput name='email' placeholder='email' type='email'/>
              <PasswordInput name='password' placeholder='password' />
              <PasswordInput name='confirmPassword' placeholder='password' />
              <Form.Item>
                <CustomButton type='primary' htmlType='submit'>Register</CustomButton>
              </Form.Item>
          </Form>
            <Typography.Text>Already have an account? <Link to={Paths.login}>Login</Link></Typography.Text>
         </Card>
      </Row>
    </Layout>
  )
}

export default Register