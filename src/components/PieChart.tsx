import { PieChartProps } from '@/interfaces/chart.interface'
import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = (props: PieChartProps) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Pie data={props.data} options={props.options} width={400} height={200}/>
    </div>
  )
}

export default PieChart
