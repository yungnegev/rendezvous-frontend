import { Card, Form, Space } from 'antd'
import { Log } from '../../lib/types'
import CustomInput from '../customInput'
import CustomError from '../customError'
import CustomButton from '../customButton'



interface CustomFormProps<T> {
    onFinish: (values: T) => void
    btnText: string
    title: string
    error?: string
    log?: T
}

const CustomForm = ({ 
    onFinish,
    btnText,
    title,
    error,
    log,
 }: CustomFormProps<Log>) => {
  return (
    <Card 
        title={title}
        style={{ width: '30rem' }}
        >
        <Form 
            name='log-form' 
            onFinish={onFinish} 
            initialValues={log}
            >
            <CustomInput type='text' name='firstName' placeholder='Name'/>
            <CustomInput type='text' name='lastName' placeholder='Surname'/>
            <CustomInput type='number' name='age' placeholder='age'/>
            <CustomInput type='text' name='address' placeholder='address'/>
            <Space>
                <CustomError  message={error} />
                <Form.Item>
                    <CustomButton htmlType='submit'>
                        {btnText}
                    </CustomButton>
                </Form.Item>
            </Space>
        </Form>
    </Card>
  )
}

export default CustomForm