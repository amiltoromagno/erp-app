'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosNotifications } from 'react-icons/io'
import { format } from 'date-fns'
import Dropdown from './Dropdown'

const Header = () => {
  const currentDate: string = format(new Date(), 'dd/MM/yyyy')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false)
    }
  }

  return (
    <div className='px-3 h-16 flex items-center justify-between bg-white bg-opacity-10 rounded-2xl'>
      <div>
        <div className='text-md font-bold'>Welcome, Test User!</div>
        <div className='text-xxs'>Today is {currentDate}</div>
      </div>
      <div className='flex items-center'>
        <div className='w-10 text-xl cursor-pointer hover:text-2xl flex justify-center'>
          <IoIosNotifications />
        </div>
        <div className='bg-white rounded-full h-8 w-8 flex items-center justify-center overflow-hidden mr-3'>
          <Image
            src='/images/avatar.png'
            alt='avatar'
            width={40}
            height={40}
          ></Image>
        </div>
        <div>
          <div className='text-xxs'>Test User</div>
          <div className='text-xxxs'>Administration</div>
        </div>
        <div className='relative' ref={dropdownRef}>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <div className='w-10 h-10 cursor-pointer hover:text-xl flex justify-center items-center'>
              <IoIosArrowDown />
            </div>
          </button>
          <Dropdown isOpen={isDropdownOpen} />
        </div>
      </div>
    </div>
  )
}

export default Header
