// import styles from './index.module.css'

import { useEffect, useState } from 'react'
import CustomForm from '../../components/customForm'
import Layout from '../../components/layout'
import { Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'
import { useCreateLogMutation } from '../../services/logs'
import { Paths } from '../../lib/paths'
import type { Log } from '../../lib/types'
import { isErrorWithMessage } from '../../lib/utils'

const AddLog = () => {

  const [error, setError] = useState('')
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [createLog] = useCreateLogMutation()

  useEffect(() => {
    if(!user) {
      navigate(Paths.login)
    }
  }, [navigate, user])

  const handleSubmit = async (data: Log) => {
    try {
      await createLog(data).unwrap()
      navigate(`${Paths.status}/created`)
    } catch (err) {
      const potentialError = isErrorWithMessage(err)
      if(potentialError) {
        setError(err.data.message)
      } else {
        setError('Unknown error')
      }
    }
  }

  return (
    <Layout>
        <Row align='middle' justify='center'>
          <CustomForm
              title='Add'
              btnText='Submit'
              onFinish={handleSubmit}
              error={error}
          />
        </Row>
    </Layout>
  )
}

export default AddLog