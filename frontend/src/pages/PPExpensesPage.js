import { Box } from "@mui/material";
import Header from "../components/Header";
import PebblesVsChart from "../components/PebblesIncomeVsExpenseChart";

const PPExpenses = () => {
  return (
    <Box m="20px">
      <Header
        title="Pebbles & Pine"
        subTitle="Income & Expenses | Monthy Totals"
      />
      <Box height="75vh">
        <PebblesVsChart />
      </Box>
    </Box>
  );
};

export default PPExpenses;
