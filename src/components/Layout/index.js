import { Outlet } from 'react-router-dom'
import LeftSidebar from '../sidebar/left'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <LeftSidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
