import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Paths } from './lib/paths'
import store from './redux/store'
import './index.css'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import { ConfigProvider, theme } from 'antd'
import AuthWrapper from './components/authWrapper/AuthWrapper'
import AddLog from './pages/add'
import Status from './pages/status'



const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Home />
  },
  {
    path: Paths.login,
    element: <Login />
  },
  {
    path: Paths.register,
    element: <Register />
  },
  {
    path: Paths.logAdd,
    element: <AddLog />
  },
  {
    path: `${Paths.status}/:status`,
    element: <Status />
  },
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </ConfigProvider>
  </Provider>
)
