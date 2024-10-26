import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className='px-5 h-12 flex items-center justify-between'>
        <div>
            <div>Welcome, User!</div>
            <div className='text-xs'>Today is 10/10/2024</div>
        </div>
        <div>
            <div></div>
            <div></div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div><IoIosArrowDown /></div>
        </div>

    </div>
  )
}

export default Header