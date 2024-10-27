import React from 'react'

const Dropdown = (props: DropdownProps) => {
  if (!props.isOpen) return null

  return (
    <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-10 text-sm">
      <ul className="text-gray-800">
        <li className="px-4 py-2 hover:bg-gray-100 hover:rounded cursor-pointer">Settings</li>
        <li className="px-4 py-2 hover:bg-gray-100 hover:rounded cursor-pointer">Profile</li>
        <li className="px-4 py-2 hover:bg-gray-100 hover:rounded cursor-pointer">Logout</li>
      </ul>
    </div>
  )
}

export default Dropdown
