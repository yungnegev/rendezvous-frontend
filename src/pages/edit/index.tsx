import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditLogMutation, useGetLogQuery } from '../../services/logs'
import Layout from '../../components/layout'
import { Row } from 'antd'
import CustomForm from '../../components/customForm'
import { Log } from '../../lib/types'
import { Paths } from '../../lib/paths'
import { isErrorWithMessage } from '../../lib/utils'


const EditLog = () => {

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const [error, setError] = useState('')  
  const { data, isLoading } = useGetLogQuery(params.id || '') 
  const [editLog] = useEditLogMutation()

  const handleEdit = async (log: Log) => {
    try {
        const editedLog = {
            ...data,
            ...log,
        }

        await editLog(editedLog).unwrap()
        navigate(`${Paths.status}/updated`)
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

  return (
    <Layout>
        <Row align='middle' justify='center'>
            <CustomForm 
                title='Edit'
                btnText='Edit'
                error={error}
                log={data}
                onFinish={handleEdit}
            />
        </Row>
    </Layout>
  )
}

export default EditLog