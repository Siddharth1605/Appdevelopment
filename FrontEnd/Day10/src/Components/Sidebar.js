import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { VscLayoutSidebarRight } from "react-icons/vsc";
import { Link } from 'react-router-dom';
function Sidebar({openSidebarToggle, handleOpenSidebar}) {
  return (
   <>
   {openSidebarToggle && (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to={"/admin"}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to={"/patientAdmin"}>
                    <BsFillGrid3X3GapFill className='icon'/> Patients
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to={"/doctorAdmin"}>
                    <BsFillGrid3X3GapFill className='icon'/> Doctors
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to={"/"}>
                    <BsFillGearFill className='icon'/> Log out
            </Link>
            </li>
        </ul>
    </aside>)}
    <span className='icon close_icon' onClick={handleOpenSidebar}><VscLayoutSidebarRight/></span>
 
    </>
  )
}

export default Sidebar