import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import { useState } from 'react'

export default function AdminDashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
    const handleOpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Sidebar openSidebarToggle={openSidebarToggle} handleOpenSidebar={handleOpenSidebar}/>
        <Dashboard />
      </div>
    )
  }