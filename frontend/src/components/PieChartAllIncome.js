import { ResponsivePie } from '@nivo/pie'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PieChartAllIncome = () => {
  const [bankData, setBankData] = useState([])

  // API Get
  useEffect(() => {
    axios.get('/api/bankdata-api/').then((response) => {
      setBankData(response.data)
    })
  }, [])

  const incomeSalary = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Salary Income'
  })
  const incomeDaycare1 = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Daycare - Parent 1'
  })
  const incomeDaycare2 = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Daycare - Parent 2'
  })
  const incomeDaycare3 = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Daycare - Parent 3'
  })
  const incomeTshirt = bankData.filter(function (transaction) {
    return (
      transaction.category === 'Income' &&
      transaction.sub_category === 'T-shirt Company'
    )
  })
  const incomeOther = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Other'
  })
  const incomeFree = bankData.filter(function (transaction) {
    return transaction.sub_category === 'Freelance'
  })

  const incomeSalaryTotal = incomeSalary
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2)

  const incomeTshirtTotal = incomeTshirt
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2)

  const incomeDaycareTotal = [
    ...incomeDaycare1,
    ...incomeDaycare2,
    ...incomeDaycare3,
  ]
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2)

  const incomeOtherTotal = incomeOther
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2)

  const incomeFreeTotal = incomeFree
    .reduce((acc, value) => acc + parseFloat(value.amount), 0)
    .toFixed(2)

  const data = [
    {
      id: 'Salary Income',
      label: 'Salary Income',
      value: incomeSalaryTotal,
      color: 'var(--clr-bell)',
    },
    {
      id: 'T-shirt Company',
      label: 'T-shirt Company',
      value: incomeTshirtTotal,
      color: 'var(--clr-pp)',
    },
    {
      id: 'Daycare',
      label: 'Daycare',
      value: incomeDaycareTotal,
      color: 'var(--clr-kk)',
    },
    {
      id: 'Other',
      label: 'Other',
      value: incomeOtherTotal,
      color: 'var(--clr-gov)',
    },
    {
      id: 'Freelance',
      label: 'Freelance',
      value: incomeFreeTotal,
      color: 'var(--clr-free)',
    },
  ]

  return (
    <div className='chart-container'>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={[
          'var(--clr-bell)',
          'var(--clr-pp)',
          'var(--clr-kk)',
          'var(--clr-gov)',
          'var(--clr-free)',
        ]}
        borderWidth={1}
        // borderColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             0.2
        //         ]
        //     ]
        // }}
        arcLinkLabelsSkipAngle={10}
        // arcLinkLabelsTextColor={colors.grey[100]}
        arcLinkLabelsThickness={2}
        // arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [
            // [
            //     'darker',
            //     2
            // ]
          ],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 20,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  )
}

export default PieChartAllIncome
