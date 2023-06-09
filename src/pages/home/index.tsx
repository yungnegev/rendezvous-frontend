import { PlusCircleOutlined } from '@ant-design/icons'
import CustomButton from '../../components/customButton'
import Layout from '../../components/layout'
import { Table } from 'antd'
import { useGetAllLogsQuery } from '../../services/logs'
import type { ColumnsType } from 'antd/es/table'
import { Log } from '../../lib/types'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../lib/paths'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/slices/authSlice'
import { useEffect } from 'react'

const Home = () => {

  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const { data, isLoading } = useGetAllLogsQuery()

  useEffect(() => {
    if (!user) { 
      navigate('/login')
    }
  }, [navigate, user])

  const columns: ColumnsType<Log> = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
  ]

  const goToAdd = () => navigate(Paths.logAdd)

  return (
    <Layout>
      <CustomButton type='primary' onClick={goToAdd} icon={<PlusCircleOutlined />}>
        Add
      </CustomButton>
      <Table
        className={styles.table} 
        loading={isLoading} 
        dataSource={data} 
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.log}/${record.id}`)
          }
        }}
        />
    </Layout>
  )
}

export default Home