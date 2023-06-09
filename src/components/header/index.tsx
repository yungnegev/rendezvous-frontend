import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.css'
import { Layout, Space } from 'antd'
import CustomButton from '../customButton'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../lib/paths'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../redux/slices/authSlice'

const Header = () => {

  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/login')
  }

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
        {
          user ? (
            <CustomButton type='ghost' icon={<LogoutOutlined />} onClick={onLogout}>
              Logout
            </CustomButton>
          ) : (
            <Space>
            <Link to={Paths.register} className={styles.link}>
              <CustomButton type='ghost' icon={<UserOutlined />}>Register</CustomButton>
            </Link>
            <Link to={Paths.login}>
              <CustomButton type='default' icon={<LoginOutlined />}>Login</CustomButton>
            </Link>
          </Space>
          )    
        }
    </Layout.Header>
  )
}

export default Header