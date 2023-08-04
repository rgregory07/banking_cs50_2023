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

  const tshirtIncome = bankData
    .filter(function (item) {
      return (
        item.category === 'Income' && item.sub_category === 'T-shirt Company'
      )
    })
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)

  const daycareIncomeP1 = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Daycare - Parent 1'
  })
  const daycareIncomeP2 = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Daycare - Parent 2'
  })
  const daycareIncomeP3 = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Daycare - Parent 3'
  })

  const daycareP1Total = daycareIncomeP1
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const daycareP2Total = daycareIncomeP2
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const daycareP3Total = daycareIncomeP3
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const daycareIncomeTotal = [
    ...daycareIncomeP1,
    ...daycareIncomeP2,
    ...daycareIncomeP3,
  ]
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  const tshirtExpense = bankData.filter(function (item) {
    return item.category === 'T-shirt Company' && item.amount !== null
  })
  // console.log(pebblesExpense)
  const tshirtExpenseSum = tshirtExpense.reduce(
    (acc, value) => acc + parseFloat(value.amount),
    0
  )

  const tshirtProfit = tshirtIncome + tshirtExpenseSum

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
              T-shirt Company
            </Typography>
          </div>

          <div className='pp-header-container'>
            <div>
              <OverviewDashboard
                title='Income'
                total={tshirtIncome.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                color='var(--clr-accent)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Expenses'
                total={tshirtExpenseSum.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                color='var(--clr-red)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Profit / Loss'
                total={tshirtProfit.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                color={
                  tshirtProfit < 0 ? 'var(--clr-red)' : 'var(--clr-accent)'
                }
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
                total={daycareP1Total}
                color='var(--clr-accent)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Parent 2'
                total={daycareP2Total}
                color='var(--clr-accent)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Parent 3'
                total={daycareP3Total}
                color='var(--clr-accent)'
              />
            </div>
            <div>
              <OverviewDashboard
                title='Total'
                total={daycareIncomeTotal}
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
