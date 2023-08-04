import { Box } from '@mui/material'
import Header from '../components/Header'
import TshirtVsChart from '../components/TshirtIncomeVsExpenseChart'

const PPExpenses = () => {
  return (
    <Box m='20px'>
      <Header
        title='T-Shirt Company'
        subTitle='Income & Expenses | Monthy Totals'
      />
      <Box height='75vh'>
        <TshirtVsChart />
      </Box>
    </Box>
  )
}

export default PPExpenses
