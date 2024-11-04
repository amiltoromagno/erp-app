import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { DashboardProps } from '@/interfaces/datagrid.interface'

const DashboardTable = (props: DashboardProps) => {
  return (
    <div className='h-full w-full'>
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } }
        }}
        columns={props.dashboardData?.columns || []}
        rows={props.dashboardData?.rows || []}
        rowHeight={30}
        checkboxSelection={props.dashboardConfigs?.checkboxSelection || false}
        sx={{
          color: 'white',
          '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeaderTitle': {
            color: 'white'
          },
          '& .MuiTablePagination-root': {
            color: 'white'
          },
          '& .MuiTablePagination-root .MuiSelect-icon': {
            color: 'white'
          },
          '& .MuiTablePagination-actions .MuiIconButton-root': {
            color: 'white',
            height: '30px'
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#232323',
          },
          '& .MuiSvgIcon-root': {
            color: 'white'
          },
          '& .MuiDataGrid-filler': {
            backgroundColor: '#232323'
          },
          '& .MuiToolbar-root': {
            minHeight: '30px',
            height: '30px'
          },
          '& .MuiDataGrid-footerContainer': {
            minHeight: '30px'
          },
          '&, [class^=MuiDataGrid]': {
            border: 'none'
          }
        }}
      />
    </div>
  )
}

export default DashboardTable
