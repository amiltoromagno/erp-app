import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 70 },
  { field: 'firstName', headerName: 'First name', flex: 2, minWidth: 130 },
  { field: 'lastName', headerName: 'Last name', flex: 2, minWidth: 130 },
  { field: 'age', headerName: 'Age', flex: 0.5, minWidth: 90 }
]

const rows: GridRowsProp = [
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
  { id: 20, lastName: 'Tully', firstName: 'Edmure', age: 30 },
]

const DashboardTable = () => {
  return (
    <div className='h-full w-full border rounded'>
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } }
        }}
        columns={columns}
        rows={rows}
        rowHeight={30}
        pageSizeOptions={[10, 15, 20]}
        pagination
        checkboxSelection
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
            color: 'white'
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
          '&, [class^=MuiDataGrid]': {
            border: 'none'
          }
        }}
      />
    </div>
  )
}

export default DashboardTable
