import { Card, Form, Row } from 'antd'
import Layout from '../../components/layout'

const Login = () => {
  return (
    <Layout>
      <Row justify={'center'}>
         <Card title='Login' style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            
          </Form>
         </Card>
      </Row>
    </Layout>
  )
}

export default Login