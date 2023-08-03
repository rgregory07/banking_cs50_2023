import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { Box, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import OverviewDashboard from '../components/OverviewDashboard'

const now = new Date()
const day = `${now.getDate()}`.padStart(2, 0)
const month = `${now.getMonth() + 1}`.padStart(2, 0)
const year = now.getFullYear()
const today = `${year}-${month}-${day}`

const Dashboard = () => {
  const [rawBankData, setRawBankData] = useState([])
  const [bankData, setBankData] = useState([])
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  // API Get
  useEffect(() => {
    axios.get('/api/bankdata-api/').then((response) => {
      setRawBankData(response.data)
      setBankData(response.data)
    })
  }, [])

  // format dates for filtering
  useEffect(() => {
    const dateFromFormat = new Date(dateFrom)
    const dayFrom = `${dateFromFormat.getDate()}`.padStart(2, 0)
    const monthFrom = `${dateFromFormat.getMonth() + 1}`.padStart(2, 0)
    const yearFrom = dateFromFormat.getFullYear()
    const dateFromFiltered = `${yearFrom}-${monthFrom}-${dayFrom}`
    console.log(dateFromFiltered)

    const dateToFormat = new Date(dateTo)
    const dayTo = `${dateToFormat.getDate()}`.padStart(2, 0)
    const monthTo = `${dateToFormat.getMonth() + 1}`.padStart(2, 0)
    const yearTo = dateToFormat.getFullYear()
    const dateToFiltered = `${yearTo}-${monthTo}-${dayTo}`

    console.log(dateToFiltered)
    const filteredData = rawBankData.filter(function (data) {
      return (
        data.transaction_date >= dateFromFiltered &&
        data.transaction_date <= dateToFiltered
      )
    })
    setBankData(filteredData)
    console.log(filteredData)
  }, [dateFrom, dateTo])

  function clearDates() {
    // console.log(rawBankData)
    setDateFrom('')
    setDateTo('')
    setTimeout(() => {
      resetData()
    }, 500)
  }

  function resetData() {
    setBankData(rawBankData)
    console.log('hit reset')
  }
  // useEffect(() => {
  //   setBankData(rawBankData)
  // }, [clearDates])
  console.log(bankData)

  const totalIncome = bankData
    .filter(function (item) {
      return item.category === 'Income' && item.amount !== null
    })
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const totalSavings = bankData
    .filter(function (item) {
      return item.category === 'Savings'
    })
    .reduce((acc, value) => acc - parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const ppIncome = bankData
    .filter(function (item) {
      return (
        item.category === 'Income' && item.sub_category === 'Pebbles & Pine'
      )
    })
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)

  const incomeKKBrad = bankData.filter(function (transaction) {
    return transaction.sub_category === 'KK - Brad & Lindsay'
  })
  const incomeKKJenn = bankData.filter(function (transaction) {
    return transaction.sub_category === 'KK - Jenn & Matt'
  })
  const incomeKKErinne = bankData.filter(function (transaction) {
    return transaction.sub_category === 'KK - Erinne'
  })

  const kkBradTotal = incomeKKBrad
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const kkJennTotal = incomeKKJenn
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const kkErinneTotal = incomeKKErinne
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const incomeKKTotal = [...incomeKKBrad, ...incomeKKJenn, ...incomeKKErinne]
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const pebblesExpense = bankData.filter(function (item) {
    return item.category === 'Pebbles & Pine' && item.amount !== null
  })
  // console.log(pebblesExpense)
  const ppExpenseSum = pebblesExpense.reduce(
    (acc, value) => acc + parseFloat(value.amount),
    0
  )

  const ppProfit = ppIncome + ppExpenseSum

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subTitle='Overview of all accounts' />

        <Box className='date-picker-container'>
          <h5>Filter by Date Range</h5>
          <div className='pickers'>
            <DatePicker
              label='Date From'
              disableFuture
              value={dateFrom || null}
              onChange={(newDate) => setDateFrom(newDate)}
            />
            <DatePicker
              label='Date To'
              disableFuture
              value={dateTo || null}
              onChange={(newDate) => setDateTo(newDate.toString())}
            />
          </div>
          <button
            className='btn-main'
            onClick={() => {
              clearDates()
              resetData()
            }}
          >
            Clear Dates
          </button>
        </Box>
      </Box>

      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='80px'
        gap='20px'
      >
        {/* ROW 1 */}
        <div className='dash-box'>
          <OverviewDashboard
            title='Savings'
            total={totalSavings}
            color='var(--clr-accent)'
          />
        </div>

        <div className='dash-box'>
          <OverviewDashboard
            title='Total Income'
            total={totalIncome}
            color='var(--clr-accent)'
          />
        </div>

        {/* ROW 2 */}
        <div className='dash-section-bg'>
          <div>
            <Typography
              variant='h5'
              fontWeight='500'
              textTransform='uppercase'
              sx={{
                textAlign: 'center',
                gridColumn: 'Span 12',
                padding: '10px',
              }}
            >
              T-shirt Business Name
            </Typography>
          </div>

          <div className='pp-header-container'>
            <div>
              <OverviewDashboard
                title='Income'
                total={ppIncome.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                color='var(--clr-accent)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Expenses'
                total={ppExpenseSum.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                color='var(--clr-red)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Profit / Loss'
                total={ppProfit.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                color={ppProfit < 0 ? 'var(--clr-red)' : 'var(--clr-accent)'}
              />
            </div>
          </div>
        </div>

        {/* ROW 3 */}

        <div className='dash-section-bg'>
          <div className='dash-titles'>
            <Typography
              variant='h5'
              fontWeight='500'
              textTransform='uppercase'
              sx={{
                textAlign: 'center',
                gridColumn: 'Span 12',
                padding: '10px',
              }}
            >
              Daycare Income
            </Typography>
          </div>

          <div className='pp-header-container'>
            <div>
              <OverviewDashboard
                title='Parent 1'
                total={kkBradTotal}
                color='var(--clr-accent)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Parent 2'
                total={kkJennTotal}
                color='var(--clr-accent)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Parent 3'
                total={kkErinneTotal}
                color='var(--clr-accent)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Total'
                total={incomeKKTotal}
                color='var(--clr-accent)'
              />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default Dashboard
