"use client"
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import { HiOutlineHome, HiOutlineSquare3Stack3D, HiOutlineShieldCheck, HiPower } from "react-icons/hi2";
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

function SideBar() {
    const pathname = usePathname(); // Get the current path
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <HiOutlineHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiOutlineSquare3Stack3D />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <HiOutlineShieldCheck />,
            path: '/dashboard/upgrade'
        },
        {
            id: 4,
            name: 'Logout',
            icon: <HiPower />,
            path: '/dashboard/logout'
        }
    ]

    return (
        <div className='fixed h-full md:w-64 p-5 shadow-md'>
            <Image src={'/logo2.png'} width={160} height={100} alt='Logo'/>
            <hr className='my-5' />

            <ul>
                {Menu.map((item, index) => (
                    <Link href={item.path}>
                    <div key={index} className={`flex items-center gap-2 text-gray-600 p-3 
                    cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg 
                    ${item.path === pathname && 'bg-gray-100 text-black'}`}>
                        <div className='text-2xl'>{item.icon}</div>
                        <h2>{item.name}</h2>
                    </div>
                    </Link>
                ))}
            </ul>
            <dive className='absolute bottom-10 w-[80%]'>
            <Progress value={33} />
            <h2 className='text-sm my-2'>3 Out of 5 Course created</h2>
            <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited Courses</h2>


            </dive>

        </div>
    )
}

export default SideBar
