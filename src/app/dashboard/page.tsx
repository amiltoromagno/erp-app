'use client'
import React from 'react'
import BigDashboardCard from '@/components/BigDashboardCard'
import DashboardTable from '@/components/DashboardTable'
import PieChart from '@/components/PieChart'
import SmallDashboardCard from '@/components/SmallDashboardCard'
import { DashboardProps } from '@/interfaces/datagrid.interface'
import { PieChartProps } from '@/interfaces/chart.interface'
import {
  mockData,
  departmentColumns,
  departmentRows,
  employeeColumns,
  employeeRows,
  teamColumns,
  teamRows
} from '@/mocks/dashboard.mock'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const Dashboard = () => {
  const employeeDatagrid: DashboardProps = {
    dashboardData: {
      columns: employeeColumns,
      rows: employeeRows
    }
  }

  const departmentDatagrid: DashboardProps = {
    dashboardData: {
      columns: departmentColumns,
      rows: departmentRows
    }
  }

  const teamDatagrid: DashboardProps = {
    dashboardData: {
      columns: teamColumns,
      rows: teamRows
    }
  }

  const appsChart: PieChartProps = {
    data: {
      labels: ['Pending', 'Approved', 'Rejected'],
      datasets: [
        {
          data: [80, 370, 50],
          backgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.0)']
        }
      ]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: true,
          onClick: () => {},
          position: 'left',
          labels: {
            generateLabels: (chart) => {
              const datasets = chart.data.datasets;
              return datasets[0].data.map((data, i) => ({
                text: `${chart.data?.labels?.[i]} ${data}`,
                fillStyle: (datasets[0].backgroundColor as string[] | undefined)?.[i] ?? 'grey',
                index: i,
                fontColor: 'white'
              }))
            },
            boxWidth: 20,
            padding: 15,
            font: {
              size: 14,
              style: 'normal',
            },
          }
        }
      }
    }
  }

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
        <BigDashboardCard
          component={DashboardTable}
          title='Employees'
          data={employeeDatagrid}
        />
        <BigDashboardCard
          component={DashboardTable}
          title='Departments'
          data={departmentDatagrid}
        />
        <BigDashboardCard
          component={DashboardTable}
          title='Teams'
          data={teamDatagrid}
        />
        <BigDashboardCard
          component={PieChart}
          title='Employees Applications Card'
          data={appsChart}
        />
      </div>
    </div>
  )
}

export default Dashboard
