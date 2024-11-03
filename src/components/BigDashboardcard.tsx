import React from 'react'
import DashboardTable from './DashboardTable'

const BigDashboardcard = () => {
  return (
    <div className='h-80 flex-grow rounded-2xl py-6 basis-[calc(50%-16px)] px-4 flex bg-white bg-opacity-10'>
        <DashboardTable />
    </div>
  )
}

export default BigDashboardcard