import React from 'react'
import Box from '@mui/material/Box'
import { CssBaseline } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import HouseIncomeVsExpenses from './pages/HouseIncomeVsExpensePage'
import BankData from './pages/BankData'
import Sidebar from './layout/Sidebar'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import ManualEntry from './components/ManualEntry'
import AllIncomeChart from './pages/AllIncomeChart'
import Upload from './components/Upload'
import PPExpenses from './pages/PPExpensesPage'
import HomeExpenses from './pages/HomeExpensePage'
import Login from './auth (future use)/Login'
import Register from './auth (future use)/Register'
import Profile from './pages/Profile'

import '../src/sass/main.scss'

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className='app'>
        <Sidebar />

        <main className='content'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Dashboard />} />
                <Route path='/bankdata' element={<BankData />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/manual-entry' element={<ManualEntry />} />
                <Route path='/upload' element={<Upload />} />
                <Route path='/income' element={<AllIncomeChart />} />
                <Route path='/pp-expenses' element={<PPExpenses />} />
                <Route
                  path='/home-income-vs-expenses'
                  element={<HouseIncomeVsExpenses />}
                />
                <Route path='/home-expenses' element={<HomeExpenses />} />
              </Routes>
            </Box>
          </LocalizationProvider>
        </main>
      </div>
    </>
  )
}

export default App
