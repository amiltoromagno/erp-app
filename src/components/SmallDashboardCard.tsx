import { SmallDashboardData } from '@/interfaces/smallDashboardCard.interface'
import React from 'react'
import { IconType } from 'react-icons'
import { FaArrowTurnUp } from 'react-icons/fa6'
import { FaArrowTurnDown } from 'react-icons/fa6'

const SmallDashboardCard = (props: SmallDashboardData) => {
  const getIcon = (text: string): IconType => {
    if (text?.includes('more')) return FaArrowTurnUp
    return FaArrowTurnDown
  }
  const ArrowIcon = props.lastQuarter && getIcon(props.lastQuarter)

  return (
    <div className='h-40 flex-grow basis-1/4 rounded-2xl py-6 px-4 flex bg-white bg-opacity-10'>
      <div className='w-[70%] flex flex-col'>
        <div className='h-[65%] flex flex-col justify-around'>
          <div className='text-4xl'>{props.value}</div>
          <div>{props.title}</div>
        </div>
        <div className='flex-1 text-xs flex items-center'>
          {props.lastQuarter && ArrowIcon && <ArrowIcon />}&nbsp;
          {props.lastQuarter}
        </div>
      </div>
      <div className='flex-1 flex items-start justify-center'>
        <props.icon className='text-4xl' />
      </div>
    </div>
  )
}

export default SmallDashboardCard
