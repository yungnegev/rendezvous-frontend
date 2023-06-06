import styles from './index.module.css'
import { Layout as AntLayout } from 'antd'
import Header from '../header'


interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={styles.main}>
      <Header />
      <AntLayout.Content style={{ height: '100%' }}>
      { children }
      </AntLayout.Content>
    </main>
  )
}

export default Layout