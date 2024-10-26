import Link from 'next/link'
import React from 'react'
import { sideNavigationItems } from './configs/sideNavigation.config'

const SideNavigation = () => {
  return (
    <nav className='w-48'>
        <div className='w-full h-36 flex items-center'>
            <img src="images/logo.png" alt="logo" />
        </div>
      <ul>
        {sideNavigationItems.map(item => (
          <li key={item.name} className="mb-2 h-8 rounded-lg hover:bg-gray-900 flex items-center justify-center">
            <Link href={`/${item.link}`} className="w-full h-full flex items-center ml-2">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNavigation