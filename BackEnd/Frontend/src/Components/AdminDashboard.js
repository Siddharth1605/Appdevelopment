import React from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import { useState } from 'react';
import Dummy from './Dummy';
import { getToken, getRole } from './LocalStorage';
export default function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  const Token = localStorage.getItem('Token') !== null;
  const Role = localStorage.getItem('Role') === "ADMIN";
  return (
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} handleOpenSidebar={handleOpenSidebar} />
      {getToken() && getRole() === "ADMIN" && <Dashboard />}
    </div>
  );
}
