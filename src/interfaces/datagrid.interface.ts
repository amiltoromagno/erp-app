import { GridColDef, GridRowsProp } from '@mui/x-data-grid'

export interface DashboardProps {
  dashboardData: {
    columns: GridColDef[]
    rows: GridRowsProp
  }
  dashboardConfigs?: {
    pagination?: boolean
    checkboxSelection?: boolean
  }
}
