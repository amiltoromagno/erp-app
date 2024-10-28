'use client'
import SmallDashboardCard from '@/components/SmallDashboardCard'
import { mockData } from '@/mocks/dashboard.mock'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between'>
        {mockData.map(item => (
          <SmallDashboardCard
            title={item.title}
            value={item.value}
            icon={item.icon}
            lastQuarter={item.lastQuarter}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
