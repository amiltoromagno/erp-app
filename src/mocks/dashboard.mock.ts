
import { SmallDashboardData } from '@/interfaces/smallDashboardCard.interface'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { IoPeople } from 'react-icons/io5'
import { MdFileCopy } from 'react-icons/md'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'

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

export const employeeColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 70 },
  { field: 'firstName', headerName: 'First name', flex: 2, minWidth: 130 },
  { field: 'lastName', headerName: 'Last name', flex: 2, minWidth: 130 },
  { field: 'age', headerName: 'Age', flex: 0.5, minWidth: 90 }
]

export const employeeRows: GridRowsProp = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: null, firstName: 'Melisandre', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Targaryen', firstName: 'Viserys', age: 37 },
  { id: 11, lastName: 'Stark', firstName: 'Sansa', age: 22 },
  { id: 12, lastName: 'Stark', firstName: 'Robb', age: 24 },
  { id: 13, lastName: 'Targaryen', firstName: 'Rhaegar', age: 30 },
  { id: 14, lastName: 'Baratheon', firstName: 'Robert', age: 50 },
  { id: 15, lastName: 'Greyjoy', firstName: 'Theon', age: 26 },
  { id: 16, lastName: 'Tyrell', firstName: 'Margaery', age: 24 },
  { id: 17, lastName: 'Martell', firstName: 'Oberyn', age: 43 },
  { id: 18, lastName: 'Arryn', firstName: 'Lysa', age: 38 },
  { id: 19, lastName: 'Tully', firstName: 'Catelyn', age: 44 },
  { id: 20, lastName: 'Tully', firstName: 'Edmure', age: 30 }
]

export const departmentColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 70 },
  { field: 'name', headerName: 'Department Name', flex: 2, minWidth: 150 },
  { field: 'location', headerName: 'Location', flex: 1.5, minWidth: 100 },
  { field: 'head', headerName: 'Head of Department', flex: 2, minWidth: 150 }
]

export const departmentRows: GridRowsProp = [
  {
    id: 1,
    name: 'Human Resources',
    location: 'Building A',
    head: 'Alice Sutton'
  },
  { id: 2, name: 'Finance', location: 'Building B', head: 'John Loxley' },
  { id: 3, name: 'IT', location: 'Building C', head: 'Thomas Grey' },
  { id: 4, name: 'Marketing', location: 'Building D', head: 'Margery Vale' },
  { id: 5, name: 'Sales', location: 'Building E', head: 'Robert Percival' },
  { id: 6, name: 'Research', location: 'Building F', head: 'Anselm Drayton' },
  { id: 7, name: 'Operations', location: 'Building G', head: 'Wilfred Hart' },
  {
    id: 8,
    name: 'Customer Support',
    location: 'Building H',
    head: 'Hilda Farley'
  },
  { id: 9, name: 'Legal', location: 'Building I', head: 'Lionel Fitzroy' },
  { id: 10, name: 'Logistics', location: 'Building J', head: 'Agnes Barlow' }
]

export const teamColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 70 },
  { field: 'name', headerName: 'Team Name', flex: 2, minWidth: 150 },
  { field: 'project', headerName: 'Current Project', flex: 2, minWidth: 200 },
  { field: 'lead', headerName: 'Team Lead', flex: 1.5, minWidth: 150 }
]

export const teamRows: GridRowsProp = [
  {
    id: 1,
    name: 'Development Team',
    project: 'New Website',
    lead: 'Edmund Blackwood'
  },
  {
    id: 2,
    name: 'Design Team',
    project: 'Brand Refresh',
    lead: 'Rowena Fairbairn'
  },
  { id: 3, name: 'QA Team', project: 'Product Testing', lead: 'Hugh Redmond' },
  { id: 4, name: 'Content Team', project: 'Blog Revamp', lead: 'Walter Grimsby' },
  {
    id: 5,
    name: 'Data Team',
    project: 'Market Analysis',
    lead: 'Giles Ashdown'
  },
  { id: 6, name: 'SEO Team', project: 'SEO Strategy', lead: 'Maud Hawke' },
  { id: 7, name: 'Sales Team', project: 'Quarterly Sales', lead: 'Isabel Harlowe' },
  {
    id: 8,
    name: 'Support Team',
    project: 'Customer Feedback',
    lead: 'Alan Burleigh'
  },
  {
    id: 9,
    name: 'HR Team',
    project: 'Employee Onboarding',
    lead: 'Beatrice Merton'
  },
  { id: 10, name: 'Finance Team', project: 'Annual Budget', lead: 'Godfrey Wynne' }
]
