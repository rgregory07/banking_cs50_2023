import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";
import OverviewDashboard from "../components/OverviewDashboard";
import HomeExpenseBar from "../components/HouseExpenseBarChart";
import PebblesVsChart from "../components/PebblesIncomeVsExpenseChart";

const Dashboard = () => {
  const [bankData, setBankData] = useState([]);

  // API Get
  useEffect(() => {
    axios.get("/api/bankdata-api/").then((response) => {
      setBankData(response.data);
    });
  }, []);

  console.log(bankData);

  const totalIncome = bankData.filter(function (item) {
    return item.category === "Income";
  });

  const totalIncomeSum = totalIncome
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString();

  const totalSavings = bankData
    .filter(function (item) {
      return item.category === "Savings";
    })
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString();

  const ppIncome = bankData.filter(function (item) {
    return item.category === "Income" && item.sub_category === "Pebbles & Pine";
  });

  const ppIncomeSum = ppIncome
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString();
  const ppIncomeSumNum = ppIncome
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2);

  console.log(ppIncome);

  const incomeKKBrad = bankData.filter(function (transaction) {
    return transaction.sub_category === "KK - Brad & Lindsay";
  });
  const incomeKKJenn = bankData.filter(function (transaction) {
    return transaction.sub_category === "KK - Jenn & Matt";
  });
  const incomeKKErinne = bankData.filter(function (transaction) {
    return transaction.sub_category === "KK - Erinne";
  });

  const incomeKKTotal = [...incomeKKBrad, ...incomeKKJenn, ...incomeKKErinne]
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString();

  const bellIncome = bankData.filter(function (item) {
    return (
      item.category === "Income" && item.sub_category === "Ryan Bell Media"
    );
  });

  const bellIncomeSum = bellIncome
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString();

  const pebblesExpense = bankData.filter(function (item) {
    return item.category === "Pebbles & Pine" && item.amount !== null;
  });
  console.log(pebblesExpense);
  const ppExpenseSum = pebblesExpense
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toLocaleString();

  console.log(ppExpenseSum);
  const ppExpenseSumNum =
    pebblesExpense
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(2) * -1;
  console.log(ppExpenseSumNum);
  const ppProfit = (ppIncomeSumNum - ppExpenseSumNum).toLocaleString();

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Overview of all accounts" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <div className="dash-box">
          <OverviewDashboard
            title="Savings"
            subTitle="Current Year Total"
            total={totalSavings}
          />
        </div>

        <div className="dash-box">
          <OverviewDashboard
            title="Total Income"
            subTitle="all acounts combined"
            total={totalIncomeSum}
          />
        </div>

        {/* ROW 2 */}
        <Box
          backgroundColor="var(--clr-light-gray)"
          gridColumn="span 12"
          gridRow="span 3"
        >
          <div className="dash-pp-headers">
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize={"20px"}
              sx={{ textAlign: "center", gridColumn: "Span 12" }}
              p="5px"
            >
              Pebbles & Pine Income / Expenses
            </Typography>
          </div>

          <div className="pp-header-container">
            <div className="dash-pp-headers">
              <Typography
                fontSize={"14px"}
                sx={{
                  textTransform: "uppercase",
                  borderBottom: "1px solid grey",
                }}
              >
                Income
              </Typography>
              <Typography fontSize={"20px"} color={"var(--clr-accent)"}>
                ${ppIncomeSum}
              </Typography>
            </div>
            <div className="dash-pp-headers">
              <Typography
                fontSize={"14px"}
                sx={{
                  textTransform: "uppercase",
                  borderBottom: "1px solid grey",
                }}
              >
                Expenses
              </Typography>
              <Typography fontSize={"20px"} color={"var(--clr-red)"}>
                ${ppExpenseSum}
              </Typography>
            </div>
            <div className="dash-pp-headers">
              <Typography
                fontSize={"14px"}
                sx={{
                  textTransform: "uppercase",
                  borderBottom: "1px solid grey",
                }}
              >
                Profit / Loss
              </Typography>
              <Typography
                fontSize={"20px"}
                color={ppProfit < 0 ? "var(--clr-red)" : "var(--clr-accent)"}
              >
                ${ppProfit}
              </Typography>
            </div>
          </div>

          <Box height="75%" className="dash-charts">
            <PebblesVsChart />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          className="dash-charts"
          backgroundColor="var(--clr-light-gray)"
          gridColumn="span 12"
          gridRow="span 4"
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight="600"
              fontSize={"20px"}
              sx={{ textAlign: "center", gridColumn: "Span 12" }}
              p="5px"
            >
              Household Expenses
            </Typography>
          </Box>

          <Box height="85%">
            <HomeExpenseBar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
