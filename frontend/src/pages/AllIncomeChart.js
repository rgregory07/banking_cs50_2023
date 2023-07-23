import { Box } from "@mui/material"
import Header from "../components/Header"
import PieChartAllIncome from "../components/PieChartAllIncome"



const AllIncomeChart = () => {

    return (
        <Box m="20px">
            <Header title="Income" subTitle="Overview of all Income" />
            <Box height="75vh">
                <PieChartAllIncome />
            </Box>
        </Box>
    )
}

export default AllIncomeChart