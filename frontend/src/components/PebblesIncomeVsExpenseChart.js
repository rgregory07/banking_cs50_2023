import React, { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";

const PebblesVsChart = () => {
  const [bankData, setBankData] = useState([]);

  // API Get
  useEffect(() => {
    axios.get("/api/bankdata-api/").then((response) => {
      setBankData(response.data);
    });
  }, []);

  // console.log(bankData)

  // Filter By Month
  const filteredDateJan = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-01-01" &&
      item.transaction_date <= "2023-01-31"
    );
  });
  const filteredDateFeb = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-02-01" &&
      item.transaction_date <= "2023-02-29"
    );
  });
  const filteredDateMarch = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-03-01" &&
      item.transaction_date <= "2023-03-31"
    );
  });
  const filteredDateApril = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-04-01" &&
      item.transaction_date <= "2023-04-30"
    );
  });
  const filteredDateMay = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-05-01" &&
      item.transaction_date <= "2023-05-31"
    );
  });
  const filteredDateJune = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-06-01" &&
      item.transaction_date <= "2023-06-30"
    );
  });
  const filteredDateJuly = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-07-01" &&
      item.transaction_date <= "2023-07-31"
    );
  });
  const filteredDateAug = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-08-01" &&
      item.transaction_date <= "2023-08-31"
    );
  });
  const filteredDateSept = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-09-01" &&
      item.transaction_date <= "2023-09-30"
    );
  });
  const filteredDateOct = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-10-01" &&
      item.transaction_date <= "2023-10-31"
    );
  });
  const filteredDateNov = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-11-01" &&
      item.transaction_date <= "2023-11-31"
    );
  });
  const filteredDateDec = bankData.filter(function (item) {
    return (
      item.transaction_date >= "2023-12-01" &&
      item.transaction_date <= "2023-12-31"
    );
  });

  // Filter Monthly into Income / Expense

  const ppIncomeJan =
    filteredDateJan
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseJan =
    filteredDateJan
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeFeb =
    filteredDateFeb
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseFeb =
    filteredDateFeb
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeMarch =
    filteredDateMarch
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseMarch =
    filteredDateMarch
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeApril =
    filteredDateApril
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseApril =
    filteredDateApril
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeMay =
    filteredDateMay
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseMay =
    filteredDateMay
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeJune =
    filteredDateJune
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseJune =
    filteredDateJune
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeJuly =
    filteredDateJuly
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseJuly =
    filteredDateJuly
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeAug =
    filteredDateAug
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseAug =
    filteredDateAug
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeSept =
    filteredDateSept
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseSept =
    filteredDateSept
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeOct =
    filteredDateOct
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseOct =
    filteredDateOct
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeNov =
    filteredDateNov
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseNov =
    filteredDateNov
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const ppIncomeDec =
    filteredDateDec
      .filter(function (item) {
        return item.sub_category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1;

  const ppExpenseDec =
    filteredDateDec
      .filter(function (item) {
        return item.category === "Pebbles & Pine";
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1;

  const data = [
    {
      id: "Income",
      color: "var(--clr-accent)",
      data: [
        {
          x: "Jan",
          y: ppIncomeJan,
        },
        {
          x: "Feb",
          y: ppIncomeFeb,
        },
        {
          x: "March",
          y: ppIncomeMarch,
        },
        {
          x: "April",
          y: ppIncomeApril,
        },
        {
          x: "May",
          y: ppIncomeMay,
        },
        {
          x: "June",
          y: ppIncomeJune,
        },
        {
          x: "July",
          y: ppIncomeJuly,
        },
        {
          x: "Aug",
          y: ppIncomeAug,
        },
        {
          x: "Sept",
          y: ppIncomeSept,
        },
        {
          x: "Oct",
          y: ppIncomeOct,
        },
        {
          x: "Nov",
          y: ppIncomeNov,
        },
        {
          x: "Dec",
          y: ppIncomeDec,
        },
      ],
    },
    {
      id: "Expenses",
      color: "var(--clr-red)",
      data: [
        {
          x: "Jan",
          y: ppExpenseJan,
        },
        {
          x: "Feb",
          y: ppExpenseFeb,
        },
        {
          x: "March",
          y: ppExpenseMarch,
        },
        {
          x: "April",
          y: ppExpenseApril,
        },
        {
          x: "May",
          y: ppExpenseMay,
        },
        {
          x: "June",
          y: ppExpenseJune,
        },
        {
          x: "July",
          y: ppExpenseJuly,
        },
        {
          x: "Aug",
          y: ppExpenseAug,
        },
        {
          x: "Sept",
          y: ppExpenseSept,
        },
        {
          x: "Oct",
          y: ppExpenseOct,
        },
        {
          x: "Nov",
          y: ppExpenseNov,
        },
        {
          x: "Dec",
          y: ppExpenseDec,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      colors={["var(--clr-accent)", "var(--clr-red)"]}
      margin={{ top: 50, right: 50, bottom: 100, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      // yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Monthy Totals",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Amount",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 70,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PebblesVsChart;
