'use client'
import BigDashboardcard from '@/components/BigDashboardcard'
import SmallDashboardCard from '@/components/SmallDashboardCard'
import { mockData } from '@/mocks/dashboard.mock'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='space-y-4'>
      <div className='flex gap-4'>
        {mockData.map(item => (
          <SmallDashboardCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            lastQuarter={item.lastQuarter}
          />
        ))}
      </div>
      <div className='w-full flex flex-wrap gap-4'>
        <BigDashboardcard />
        <BigDashboardcard />
        <BigDashboardcard />
        <BigDashboardcard />
      </div>
    </div>
  )
}

export default Dashboard
