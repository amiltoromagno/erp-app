'use client'
import React from 'react'
import classNames from 'classnames'
import { sideNavigationItems } from '@/configs/sideNavigation.config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const SideNavigation = () => {
  const currentPath: string = usePathname()
  return (
    <nav className='w-56 h-full bg-white bg-opacity-10'>
      <div className='w-full h-32 mb-4 flex items-center justify-center'>
        <Link href='/'>
          <Image
            src='/images/logo.png'
            alt='logo'
            width={150}
            height={150}
          ></Image>
        </Link>
      </div>
      <ul>
        {sideNavigationItems.map(item => {
          const Icon = item.icon
          return (
            <li key={item.name} className='pr-2 mb-2'>
              <Link
                href={item.path}
                className={classNames({
                  'h-10 rounded ml-2 hover:bg-white hover:bg-opacity-5 flex items-center pl-2 transition-colors':
                    true,
                  'bg-white bg-opacity-5': item.path === currentPath
                })}
              >
                {Icon && <Icon className='mr-2'/>}
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SideNavigation
