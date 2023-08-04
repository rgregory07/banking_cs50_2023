import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from 'react'
import { AgGridReact } from 'ag-grid-react' // the AG Grid React Component
import axios from 'axios'
import { Box, Button, IconButton, useTheme } from '@mui/material'
import {
  CategoryList,
  SubcategoryHouse,
  SubcategoryTshirt,
  SubcategoryDaycare,
  SubcategoryMedical,
  SubcategoryMisc,
  SubcategoryIncome,
  SubcategorySavings,
  SubcategoryFreelance,
} from '../data/CategoryData'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional theme CSS
import NewHeader from '../components/Header'

const BankData = () => {
  const theme = useTheme()

  const gridRef = useRef() // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState() // Set rowData to Array of Objects, one Object per Row
  const [singleClickToggle, setSingleClickToggle] = useState(false)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const MoneyInOut = {
    'money-in': (params) => params.value > 0,
    'money-out': (params) => params.value < 0,
  }

  const currencyFormatter = (params) => {
    const amount = params.value
    return (Math.floor(amount * 100) / 100).toFixed(2)
  }

  const formatNumber = (number) => {
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    {
      colId: 'Select',
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      width: '60px',
    },
    // {
    //     field: 'account',
    //     // filter: 'agDateColumnFilter',
    //     headerName: 'Account',
    //     width: '160px'
    // },
    {
      field: 'transaction_date',
      filter: 'agDateColumnFilter',
      headerName: 'Date',
      width: '160px',
    },
    {
      field: 'description_1',
      headerName: 'Description',
    },
    {
      field: 'description_2',
      headerName: 'Details',
    },
    {
      field: 'amount',
      headerName: 'Amount',
      valueFormatter: currencyFormatter,
      cellClassRules: MoneyInOut,
      width: '120px',
    },
    {
      colId: 'category',
      field: 'category',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: CategoryList,
      },
      filter: 'agSetColumnFilter',
    },
    {
      colId: 'sub_category',
      field: 'sub_category',
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: function (params) {
        let selectedCategory = params.data.category
        switch (selectedCategory) {
          case 'Household':
            return { values: SubcategoryHouse }
          case 'T-shirt Company':
            return { values: SubcategoryTshirt }
          case 'Daycare':
            return { values: SubcategoryDaycare }
          case 'Medical':
            return { values: SubcategoryMedical }
          case 'Misc':
            return { values: SubcategoryMisc }
          case 'Income':
            return { values: SubcategoryIncome }
          case 'Savings':
            return { values: SubcategorySavings }
          case 'Freelance':
            return { values: SubcategoryFreelance }
        }
      },
      filter: 'agSetColumnFilter',
    },
    { headerName: 'Notes', field: 'notes', editable: true },
  ])

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
    resizable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['apply', 'reset'],
      closeOnApply: true,
    },
  }))

  const getRowId = useMemo(() => {
    return (params) => {
      return params.data.id
    }
  }, [])

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log('cellClicked', event)
  }, [])

  // API Get
  useEffect(() => {
    axios.get('/api/bankdata-api/').then((response) => {
      setRowData(response.data)
      console.log(response.data)
    })
  }, [])

  const saveChangesToDatabase = (data) => {
    console.log('clicked save')
    let url = `http://localhost:8000/bankapp/bankdata/update/${data.id}/`
    axios
      .put(
        url,
        {
          notes: data.notes,
          category: data.category,
          sub_category: data.sub_category,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }

  const onCellValueChanged = useCallback((params) => {
    saveChangesToDatabase(params.data)
    console.log('onCellValueChanged Data: ', params.data)
  }, [])

  return (
    <div>
      <div className='grid-container'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <NewHeader
            title='Bank Data'
            subTitle='Assign Categories to transactions'
          />
        </Box>

        {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
        <div
          className={
            theme.palette.mode === 'dark'
              ? 'ag-theme-alpine-dark'
              : 'ag-theme-alpine'
          }
          style={{ width: '100%', height: '100%' }}
        >
          <AgGridReact
            ref={gridRef} // Ref for accessing Grid's API
            getRowId={getRowId}
            rowData={rowData} // Row Data for Rows
            singleClickEdit={singleClickToggle}
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            maintainColumnOrder={false} // if columns are rearranged it will keep the order when col def is updated
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection='multiple' // Options - allows click selection of rows
            rowMultiSelectWithClick={false}
            stopEditingWhenCellsLoseFocus={true}
            onCellValueChanged={onCellValueChanged}
            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          />
        </div>
      </div>
    </div>
  )
}

export default BankData
