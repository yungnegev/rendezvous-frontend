import { Form, Input } from 'antd'

interface CustomInputProps {
    name: string
    placeholder: string
    type?: string
}


const CustomInput = ({ name, placeholder, type = 'text' } :CustomInputProps) => {
  return (
    <Form.Item
        name={name}
        rules={[{required: true, message: 'Required field'}]}
        shouldUpdate={true}
        >
        <Input type={type} placeholder={placeholder} size='large'/>
    </Form.Item>
  )
}

export default CustomInput