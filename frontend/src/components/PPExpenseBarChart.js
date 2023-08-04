import React, { useEffect, useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import axios from 'axios'

const PPExpenseBar = () => {
  const [bankData, setBankData] = useState([])

  // API Get
  useEffect(() => {
    axios.get('/api/bankdata-api/').then((response) => {
      setBankData(response.data)
    })
  }, [])

  // Filter by Date - Start
  const date = new Date()
  const month = date.getMonth()
  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]

  const filteredDateJan = bankData.filter(function (item) {
    return (
      item.transaction_date >= '2023-01-01' &&
      item.transaction_date <= '2023-01-31'
    )
  })

  const ppExpenseJan =
    filteredDateJan
      .filter(function (item) {
        return item.category === 'T-shirt Company'
      })
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1
  console.log(ppExpenseJan)

  const ppIncomeJan = filteredDateJan
    .filter(function (item) {
      return (
        item.category === 'Income' && item.sub_category === 'T-shirt Company'
      )
    })
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(0)
  console.log(ppIncomeJan)

  const newData = bankData.map((item) => {
    return {
      ...item,
      transaction_date: monthNames[month],
    }
  })
  console.log(newData)

  const ppMaterials = newData.filter(function (item) {
    return item.sub_category === 'Materials'
  })

  const ppShipping = newData.filter(function (item) {
    return item.sub_category === 'Shipping'
  })

  const ppApps = newData.filter(function (item) {
    return item.sub_category === 'Apps & Software'
  })

  const ppAdvertising = newData.filter(function (item) {
    return item.sub_category === 'Advertising'
  })

  const ppDonations = newData.filter(function (item) {
    return item.sub_category === 'Donations'
  })

  const ppLoanInt = newData.filter(function (item) {
    return item.sub_category === 'Loan Interest'
  })

  const ppClass50 = newData.filter(function (item) {
    return item.sub_category === 'Class 50 (Computers)'
  })

  const ppClass53 = newData.filter(function (item) {
    return item.sub_category === 'Class 53 (Manufacturing)'
  })

  const ppClass8 = newData.filter(function (item) {
    return item.sub_category === 'Class 8 (Furniture)'
  })

  const ppMisc = newData.filter(function (item) {
    return item.sub_category === 'Business Misc'
  })

  const ppWebsite = newData.filter(function (item) {
    return item.sub_category === 'Website'
  })

  const ppMarket = newData.filter(function (item) {
    return item.sub_category === 'Market/Shows'
  })

  const ppLoanPay = newData.filter(function (item) {
    return item.sub_category === 'Loan Payment'
  })

  console.log(ppMaterials)

  const ppMaterialsTotal =
    ppMaterials
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppShippingTotal =
    ppShipping
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppAppsTotal =
    ppApps
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppAdvertisingTotal =
    ppAdvertising
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppDonationsTotal =
    ppDonations
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppLoanIntTotal =
    ppLoanInt
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppClass50Total =
    ppClass50
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppClass53Total =
    ppClass53
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppClass8Total =
    ppClass8
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppMiscTotal =
    ppMisc
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppWebsiteTotal =
    ppWebsite
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppMarketTotal =
    ppMarket
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppLoanPayTotal =
    ppLoanPay
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const ppExpenseData = [
    {
      Materials: ppMaterialsTotal,
      'Materials Color': 'hsl(346, 70%, 50%)',
      Shipping: ppShippingTotal,
      'Shipping Color': 'hsl(200, 70%, 50%)',
      'Apps & Software': ppAppsTotal,
      'Apps & Software Color': 'hsl(346, 20%, 50%)',
      Advertising: ppAdvertisingTotal,
      'Advertising Color': 'hsl(346, 70%, 20%)',
      Donations: ppDonationsTotal,
      'Donations Color': 'hsl(346, 30%, 30%)',
      'Loan Interest': ppLoanIntTotal,
      'Loan Interest Color': 'hsl(144, 70%, 50%)',
      'Class 50 (Computers)': ppClass50Total,
      'Class 50 (Computers) Color': 'hsl(321, 40%, 50%)',
      'Class 53 (Manufacturing)': ppClass53Total,
      'Class 53 (Manufacturing) Color': 'hsl(346, 40%, 90%)',
      'Class 8 (Furniture)': ppClass8Total,
      'Class 8 (Furniture) Color': 'hsl(244, 40%, 50%)',
      'Business Misc': ppMiscTotal,
      'Business Misc Color': 'hsl(346, 10%, 10%)',
      Website: ppWebsiteTotal,
      'Website Color': 'hsl(346, 20%, 20%)',
      'Market/Shows': ppMarketTotal,
      'Market/Shows Color': 'hsl(346, 30%, 30%)',
      'Loan Payment': ppLoanPayTotal,
      'Loan PaymentColor': 'hsl(346, 90%, 90%)',
    },
  ]

  console.log(ppExpenseData)

  return (
    <>
      <ResponsiveBar
        data={ppExpenseData}
        keys={[
          'Materials',
          'Shipping',
          'Apps & Software',
          'Advertising',
          'Donations',
          'Loan Interest',
          'Class 50 (Computers)',
          'Class 53 (Manufacturing)',
          'Class 8 (Furniture)',
          'Business Misc',
          'Website',
          'Market/Shows',
          'Loan Payment',
        ]}
        indexBy='Date'
        margin={{ top: 20, right: 300, bottom: 20, left: 140 }}
        padding={0.3}
        groupMode='grouped'
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'amount',
          legendPosition: 'middle',
          legendOffset: -60,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'top',
            direction: 'column',
            justify: false,
            translateX: 0,
            translateY: 0,
            itemsSpacing: 3,
            itemWidth: 80,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  )
}

export default PPExpenseBar
