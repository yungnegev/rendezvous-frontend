import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { Layout, Space } from 'antd'
import CustomButton from '../customButton'
import { Link } from 'react-router-dom'
import { Paths } from '../../lib/paths'

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
        <Space>
          <div className={styles.iconDiv}>
            <TeamOutlined className={styles.teamIcon}/>
          </div>
          <Link to={Paths.home}>
            <h1>Rendezvous</h1>
          </Link>
        </Space>
        <Space>
          <Link to={Paths.register} className={styles.link}>
            <CustomButton type='ghost' icon={<UserOutlined />}>Register</CustomButton>
          </Link>
          <Link to={Paths.login}>
            <CustomButton type='default' icon={<LoginOutlined />}>Login</CustomButton>
          </Link>
        </Space>
    </Layout.Header>
  )
}

export default Header