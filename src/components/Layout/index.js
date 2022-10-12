import { Outlet } from 'react-router-dom'
 import LeftSidebar from '../sidebar/left'
import RightSidebar from '../sidebar/right'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
       <LeftSidebar /> 
      <RightSidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
