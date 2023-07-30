import { Box } from '@mui/material'
import Header from '../components/Header'
import PebblesVsChart from '../components/PebblesIncomeVsExpenseChart'
import HouseVsChart from '../components/HouseholdMonthlyInVsOut'

const HouseIncomeVsExpenses = () => {
  return (
    <Box m='20px'>
      <Header title='Household' subTitle='Income vs Expenses | Monthy Totals' />
      <Box height='67vh'>
        <HouseVsChart />
      </Box>
    </Box>
  )
}

export default HouseIncomeVsExpenses
