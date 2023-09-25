import React from 'react'
import 
 {BsFillBellFill,BsCart3, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({handleOpenSidebar}) {
  return (
    <header className='header'>
   

        <div className='menu-icon'>
            <BsJustify className='BsFillBellFill' onClick={handleOpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='BsFillEnvelopeFill'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='BsPersonCircle'/>
            <BsFillEnvelopeFill className='BsSearch'/>
            <BsPersonCircle className='BsJustify'/>
        </div>
    </header>
  )
}

export default Header