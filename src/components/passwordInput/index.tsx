import { Form, Input } from 'antd'

interface CustomInputProps {
    name: string
    placeholder: string
    dependencies?: string[]
}

const CustomInput = ({ name, placeholder, dependencies }: CustomInputProps) => {
  return (
    <Form.Item
        name={name}
        dependencies={dependencies}
        hasFeedback
        rules={[
            {required: true, message: 'Required field'},
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                    }
                    return Promise.reject(new Error('Passwords do not match'))
                }
            })
        ]}
        >
        <Input.Password placeholder={placeholder} size='large'/>
    </Form.Item>
  )
}

export default CustomInput