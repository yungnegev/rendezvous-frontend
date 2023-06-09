import { Form, Input } from 'antd'

interface CustomInputProps {
    name: string
    placeholder: string
    dependencies?: string[]
}

const PasswordInput = ({ name, placeholder, dependencies }: CustomInputProps) => {
  return (
    <Form.Item
        name={name}
        dependencies={dependencies}
        hasFeedback
        rules={[
            {required: true, message: 'Required field'},
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value) {
                        return Promise.resolve()
                    }
                    if (name === 'confirmPassword') {
                        if(!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }
                        return Promise.reject(new Error('Passwords do not match'))
                    } else {
                        if (value.length < 6) {
                            return Promise.reject(new Error('Password must be at least 6 characters in length'))
                        }
                        return Promise.resolve()
                    }
                }
            })
        ]}
        >
        <Input.Password placeholder={placeholder} size='large'/>
    </Form.Item>
  )
}

export default PasswordInput