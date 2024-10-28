
import { SmallDashboardData } from '@/interfaces/smallDashboardCard.interface'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { IoPeople } from 'react-icons/io5'
import { MdFileCopy } from 'react-icons/md'

export const mockData: SmallDashboardData[] = [
  {
    title: 'Total number of staff',
    value: 250,
    lastQuarter: '12 more than last quarter',
    icon: IoPeople
  },
  {
    title: 'Total application',
    value: 100,
    lastQuarter: '0.2% lower than last quarter',
    icon: MdFileCopy
  },
  {
    title: 'Total projects',
    value: 10,
    lastQuarter: '2% more than last quarter',
    icon: BsFillRocketTakeoffFill
  },
  {
    title: 'Total departments',
    value: 10,
    icon: IoIosPeople
  },
]
