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
    <nav className='w-48 h-full'>
      <div className='w-full h-32 mb-5'>
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
            <li key={item.name}>
              <Link
                href={item.path}
                className={classNames({
                  'h-10 rounded ml-2 hover:bg-gray-900 flex items-center pl-2 transition-colors':
                    true,
                  'bg-gray-900': item.path === currentPath
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
