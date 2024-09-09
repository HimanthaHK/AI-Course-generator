import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header1() {
  return (
    <div className='flex justify-between items-center  p-3 shadow-md'>
      <Image src={'/favicon.png'} width={40} height={40}/>
      <UserButton/>
    </div>
  )
}

export default Header1