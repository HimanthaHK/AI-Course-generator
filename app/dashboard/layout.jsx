import React from 'react'
import SideBar from './_components/SideBar'
import Header1 from './_components/Header1'


function DashboardLayout({children}) {
  return (
    <div>
        <div className='md:w-64 hidden md:block'>
            <SideBar/>
        </div>
        <div className='md:ml-64 p-10'>
        <Header1/>   
               {children}
               
        </div>
        
    </div>
  )
}

export default DashboardLayout