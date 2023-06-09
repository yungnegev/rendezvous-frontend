import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useGetLogQuery, useRemoveLogMutation } from '../../services/logs'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'
import { Paths } from '../../lib/paths'
import Layout from '../../components/layout'
import { Descriptions, Divider, Modal, Space } from 'antd'
import CustomButton from '../../components/customButton'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import CustomError from '../../components/customError'
import { isErrorWithMessage } from '../../lib/utils'


const Log = () => {

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()  
  const [error, setError] = useState('')
  const [openModal, setOpenModal] = useState<boolean>(false)
  const user = useSelector(selectUser)
  const { data, isLoading } = useGetLogQuery(params.id || '')
  const [ removeLog ] = useRemoveLogMutation()

  const handleDelete = async () => {
    setOpenModal(false)
    try {
        await removeLog(data.id).unwrap()
        navigate(`${Paths.status}/deleted`)
    } catch (err) {
        const potentialError = isErrorWithMessage(err)
        if (potentialError) {
            setError(err.data.message)
        } else {
            setError('Unknown error')
        }
    }
  }

  if (isLoading) return <span>Loading...</span>

  if (!data) return <Navigate to={Paths.home}/>

  return (
    <Layout>
        <Descriptions title='Information' bordered>
            <Descriptions.Item label='Name' span={3}> 
                { `${data.firstName} ${data.lastName}` }
            </Descriptions.Item>
            <Descriptions.Item label='Age' span={3}> 
                { data.age }
            </Descriptions.Item>
            <Descriptions.Item label='Address' span={3}> 
                { data.address }
            </Descriptions.Item>
        </Descriptions>
        {
            user?.id == data.userId && (
                <>
                    <Divider orientation='left'>Actions</Divider>
                    <Space>
                        <Link to={`/log/edit/${data.id}`}>
                            <CustomButton
                                shape='round'
                                type='default'
                                icon={<EditOutlined />}
                            >
                                Edit
                            </CustomButton>
                        </Link>
                        <CustomButton
                            shape='round'
                            danger
                            onClick={() => setOpenModal(true)}
                            icon={<DeleteOutlined />}
                        >
                            Delete
                        </CustomButton>
                    </Space>
                </>
            )
        }
        <CustomError message={error}/>
        <Modal
            title='Confirm deletion'
            open={openModal}
            onOk={handleDelete}
            onCancel={() => setOpenModal(false)}
            okText='Delete'
            cancelText='Cancel'
        >
            Are you sure you want to delete this record?
        </Modal>
    </Layout>
  )
}

export default Log