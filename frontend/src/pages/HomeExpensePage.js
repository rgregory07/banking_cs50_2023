import { Box } from "@mui/material"
import Header from "../components/Header"
import HomeExpenseBar from "../components/HouseExpenseBarChart"



const HomeExpenses = () => {

    return (
        <Box m="20px">
            <Header title="Home Expenses" subTitle="All Household Expenses" />
            <Box height="75vh">
                <HomeExpenseBar />
            </Box>
        </Box>
    )
}

export default HomeExpenses