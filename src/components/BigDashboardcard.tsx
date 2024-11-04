import React from 'react'
import { HiOutlineCube } from "react-icons/hi";

interface Props {
  component: (props: any) => React.JSX.Element
  title: string
  data?: Record<string, any>
}

const BigDashboardCard = (props: Props) => {
  return (
    <div className='h-80 w-[calc(50%-0.5rem)] flex flex-col rounded-2xl py-6 px-4 bg-white bg-opacity-10'>
      <div className='w-full h-full'>
        <div className='h-[12%] flex items-start'>
          <HiOutlineCube className='mr-2 text-xl'/>
          {props.title}
          </div>
        <div className='w-full h-[88%]'>
          <props.component {...props.data} />
        </div>
      </div>
    </div>
  )
}

export default BigDashboardCard
