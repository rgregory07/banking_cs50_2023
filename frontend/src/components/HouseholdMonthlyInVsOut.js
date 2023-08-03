import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ResponsiveLine } from '@nivo/line'

const HouseVsChart = () => {
  const [bankData, setBankData] = useState([])

  // API Get
  useEffect(() => {
    axios.get('/api/bankdata-api/').then((response) => {
      setBankData(response.data)
    })
  }, [])

  // console.log(bankData)

  // Filter By Month
  const filteredDateJan = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-01-01' &&
      item.transaction_date <= '2023-01-31'
    )
  })
  const filteredDateFeb = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-02-01' &&
      item.transaction_date <= '2023-02-29'
    )
  })
  const filteredDateMarch = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-03-01' &&
      item.transaction_date <= '2023-03-31'
    )
  })
  const filteredDateApril = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-04-01' &&
      item.transaction_date <= '2023-04-30'
    )
  })
  const filteredDateMay = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-05-01' &&
      item.transaction_date <= '2023-05-31'
    )
  })
  const filteredDateJune = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-06-01' &&
      item.transaction_date <= '2023-06-30'
    )
  })
  const filteredDateJuly = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-07-01' &&
      item.transaction_date <= '2023-07-31'
    )
  })
  const filteredDateAug = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-08-01' &&
      item.transaction_date <= '2023-08-31'
    )
  })
  const filteredDateSept = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-09-01' &&
      item.transaction_date <= '2023-09-30'
    )
  })
  const filteredDateOct = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-10-01' &&
      item.transaction_date <= '2023-10-31'
    )
  })
  const filteredDateNov = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-11-01' &&
      item.transaction_date <= '2023-11-31'
    )
  })
  const filteredDateDec = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-12-01' &&
      item.transaction_date <= '2023-12-31'
    )
  })

  // Filter Monthly into Income / Expense

  const homeIncomeJan =
    filteredDateJan
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseJan =
    filteredDateJan
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeFeb =
    filteredDateFeb
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseFeb =
    filteredDateFeb
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeMarch =
    filteredDateMarch
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseMarch =
    filteredDateMarch
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeApril =
    filteredDateApril
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseApril =
    filteredDateApril
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeMay =
    filteredDateMay
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseMay =
    filteredDateMay
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeJune =
    filteredDateJune
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseJune =
    filteredDateJune
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1
  // console.log(homeExpenseJune)
  // console.log(filteredDateJune)

  const homeIncomeJuly =
    filteredDateJuly
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseJuly =
    filteredDateJuly
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeAug =
    filteredDateAug
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseAug =
    filteredDateAug
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeSept =
    filteredDateSept
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseSept =
    filteredDateSept
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeOct =
    filteredDateOct
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseOct =
    filteredDateOct
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeNov =
    filteredDateNov
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseNov =
    filteredDateNov
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const homeIncomeDec =
    filteredDateDec
      .filter(function (item) {
        return (
          item.category === 'Income' && item.sub_category !== 'Pebbles & Pine'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * 1

  const homeExpenseDec =
    filteredDateDec
      .filter(function (item) {
        return (
          item.category === 'Household' ||
          item.category === 'Kidlet Kare' ||
          item.category === 'Misc' ||
          item.category === 'Medical' ||
          item.category === 'Ryan Freelance'
        )
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const data = [
    {
      id: 'Income',
      color: 'var(--clr-accent)',
      data: [
        {
          x: 'Jan',
          y: homeIncomeJan,
        },
        {
          x: 'Feb',
          y: homeIncomeFeb,
        },
        {
          x: 'March',
          y: homeIncomeMarch,
        },
        {
          x: 'April',
          y: homeIncomeApril,
        },
        {
          x: 'May',
          y: homeIncomeMay,
        },
        {
          x: 'June',
          y: homeIncomeJune,
        },
        {
          x: 'July',
          y: homeIncomeJuly,
        },
        {
          x: 'Aug',
          y: homeIncomeAug,
        },
        {
          x: 'Sept',
          y: homeIncomeSept,
        },
        {
          x: 'Oct',
          y: homeIncomeOct,
        },
        {
          x: 'Nov',
          y: homeIncomeNov,
        },
        {
          x: 'Dec',
          y: homeIncomeDec,
        },
      ],
    },
    {
      id: 'Expenses',
      color: 'var(--clr-red)',
      data: [
        {
          x: 'Jan',
          y: homeExpenseJan,
        },
        {
          x: 'Feb',
          y: homeExpenseFeb,
        },
        {
          x: 'March',
          y: homeExpenseMarch,
        },
        {
          x: 'April',
          y: homeExpenseApril,
        },
        {
          x: 'May',
          y: homeExpenseMay,
        },
        {
          x: 'June',
          y: homeExpenseJune,
        },
        {
          x: 'July',
          y: homeExpenseJuly,
        },
        {
          x: 'Aug',
          y: homeExpenseAug,
        },
        {
          x: 'Sept',
          y: homeExpenseSept,
        },
        {
          x: 'Oct',
          y: homeExpenseOct,
        },
        {
          x: 'Nov',
          y: homeExpenseNov,
        },
        {
          x: 'Dec',
          y: homeExpenseDec,
        },
      ],
    },
  ]

  return (
    <ResponsiveLine
      data={data}
      colors={['var(--clr-bell)', 'var(--clr-red)']}
      margin={{ top: 50, right: 50, bottom: 100, left: 50 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
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
        legend: 'Monthy Totals',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Amount',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 70,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}

export default HouseVsChart
