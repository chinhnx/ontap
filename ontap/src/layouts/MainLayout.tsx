import { type ReactNode } from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div className='flex h-screen'>
        <SideBar/>
        <div className='flex-1 bg-[#F2F2F5]'>
          <Header/>
          <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout