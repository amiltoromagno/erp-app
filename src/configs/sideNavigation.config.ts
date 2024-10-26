import { NavigationItem } from '@/interfaces/sideNavigation.interface'
import { FaArrowsToDot } from 'react-icons/fa6'
import { IoMdPerson } from 'react-icons/io'
import { MdPayments } from 'react-icons/md'
import { MdOutlinePayments } from 'react-icons/md'
import { CiMemoPad } from 'react-icons/ci'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { FaGear } from 'react-icons/fa6'
import { FaTruck } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { FaThList } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { BsFillBuildingFill } from 'react-icons/bs'
import { BsFillBagCheckFill } from 'react-icons/bs'

export const sideNavigationItems: NavigationItem[] = [
  {
    name: 'Dashboard',
    icon: FaArrowsToDot,
    path: '/dashboard'
  },
  {
    name: 'Staff',
    icon: IoMdPerson,
    path: '/staff'
  },
  {
    name: 'Payment Voucher',
    icon: MdPayments,
    path: '/payment-voucher'
  },
  {
    name: 'Payroll',
    icon: MdOutlinePayments,
    path: '/payroll'
  },
  {
    name: 'Memo',
    icon: CiMemoPad,
    path: '/memo'
  },
  {
    name: 'Circulars',
    icon: IoDocumentTextOutline,
    path: '/circulars'
  },
  {
    name: 'Maintenance',
    icon: FaGear,
    path: '/maintenance'
  },
  {
    name: 'Logistics',
    icon: FaTruck,
    path: '/logistics'
  },
  {
    name: 'Office Budget',
    icon: RiMoneyDollarCircleFill,
    path: '/office-budget'
  },
  {
    name: 'Stocks and Inventory',
    icon: FaThList,
    path: '/stocks-inventory'
  },
  {
    name: 'Notifications',
    icon: IoIosNotifications,
    path: '/notifications'
  },
  {
    name: 'Capacity Building',
    icon: BsFillBuildingFill,
    path: '/capacity-building'
  },
  {
    name: 'Procurements',
    icon: BsFillBagCheckFill,
    path: '/procurements'
  }
]
