import React, { useEffect, useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import axios from 'axios'

const HomeExpenseBar = () => {
  const [bankData, setBankData] = useState([])

  // API Get
  useEffect(() => {
    axios.get('/api/bankdata-api/').then((response) => {
      setBankData(response.data)
    })
  }, [])

  // Car Insurance
  const carInsuranceJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const carInsuranceDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Car Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // House Insurance
  const houseInsuranceJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseInsuranceDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'House Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Life Insurance
  const lifeInsuranceJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const lifeInsuranceDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Life Insurance')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Mortgage
  const mortgageJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const mortgageDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Mortgage')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Gas & Auto
  const gasAutoJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAutoDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Gas & Auto')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Groceries
  const groceriesJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const groceriesDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Groceries')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Cell
  const cellJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cellDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Cable TV
  const cableTVJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const cableTVDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Cable TV')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Gas
  const gasJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const gasDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Hydro
  const hydroJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const hydroDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Hydro')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Water Heater
  const waterHeaterJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const waterHeaterDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // House Alarm
  const houseAlarmJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseAlarmDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'House Alarm')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const houseExpenseData = [
    {
      Date: 'January',
      'Car Insurance': carInsuranceJan,
      'House Insurance': houseInsuranceJan,
      'Life Insurance': lifeInsuranceJan,
      Mortgage: mortgageJan,
      'Gas & Auto': gasAutoJan,
      Groceries: groceriesJan,
      Cell: cellJan,
      'Cable TV': cableTVJan,
      Gas: gasJan,
      'Hydro Misc': hydroJan,
      'Water Heater': waterHeaterJan,
      'House Alarm': houseAlarmJan,
    },
    {
      Date: 'February',
      'Car Insurance': carInsuranceFeb,
      'House Insurance': houseInsuranceFeb,
      'Life Insurance': lifeInsuranceFeb,
      Mortgage: mortgageFeb,
      'Gas & Auto': gasAutoFeb,
      Groceries: groceriesFeb,
      Cell: cellFeb,
      'Cable TV': cableTVFeb,
      Gas: gasFeb,
      'Hydro Misc': hydroFeb,
      'Water Heater': waterHeaterFeb,
      'House Alarm': houseAlarmFeb,
    },
    {
      Date: 'March',
      'Car Insurance': carInsuranceMar,
      'House Insurance': houseInsuranceMar,
      'Life Insurance': lifeInsuranceMar,
      Mortgage: mortgageMar,
      'Gas & Auto': gasAutoMar,
      Groceries: groceriesMar,
      Cell: cellMar,
      'Cable TV': cableTVMar,
      Gas: gasMar,
      'Hydro Misc': hydroMar,
      'Water Heater': waterHeaterMar,
      'House Alarm': houseAlarmMar,
    },
    {
      Date: 'April',
      'Car Insurance': carInsuranceApril,
      'House Insurance': houseInsuranceApril,
      'Life Insurance': lifeInsuranceApril,
      Mortgage: mortgageApril,
      'Gas & Auto': gasAutoApril,
      Groceries: groceriesApril,
      Cell: cellApril,
      'Cable TV': cableTVApril,
      Gas: gasApril,
      'Hydro Misc': hydroApril,
      'Water Heater': waterHeaterApril,
      'House Alarm': houseAlarmApril,
    },
    {
      Date: 'May',
      'Car Insurance': carInsuranceMay,
      'House Insurance': houseInsuranceMay,
      'Life Insurance': lifeInsuranceMay,
      Mortgage: mortgageMay,
      'Gas & Auto': gasAutoMay,
      Groceries: groceriesMay,
      Cell: cellMay,
      'Cable TV': cableTVMay,
      Gas: gasMay,
      'Hydro Misc': hydroMay,
      'Water Heater': waterHeaterMay,
      'House Alarm': houseAlarmMay,
    },
    {
      Date: 'June',
      'Car Insurance': carInsuranceJune,
      'House Insurance': houseInsuranceJune,
      'Life Insurance': lifeInsuranceJune,
      Mortgage: mortgageJune,
      'Gas & Auto': gasAutoJune,
      Groceries: groceriesJune,
      Cell: cellJune,
      'Cable TV': cableTVJune,
      Gas: gasJune,
      'Hydro Misc': hydroJune,
      'Water Heater': waterHeaterJune,
      'House Alarm': houseAlarmJune,
    },
    {
      Date: 'July',
      'Car Insurance': carInsuranceJuly,
      'House Insurance': houseInsuranceJuly,
      'Life Insurance': lifeInsuranceJuly,
      Mortgage: mortgageJuly,
      'Gas & Auto': gasAutoJuly,
      Groceries: groceriesJuly,
      Cell: cellJuly,
      'Cable TV': cableTVJuly,
      Gas: gasJuly,
      'Hydro Misc': hydroJuly,
      'Water Heater': waterHeaterJuly,
      'House Alarm': houseAlarmJuly,
    },
    {
      Date: 'Aug',
      'Car Insurance': carInsuranceAug,
      'House Insurance': houseInsuranceAug,
      'Life Insurance': lifeInsuranceAug,
      Mortgage: mortgageAug,
      'Gas & Auto': gasAutoAug,
      Groceries: groceriesAug,
      Cell: cellAug,
      'Cable TV': cableTVAug,
      Gas: gasAug,
      'Hydro Misc': hydroAug,
      'Water Heater': waterHeaterAug,
      'House Alarm': houseAlarmAug,
    },
    {
      Date: 'Sept',
      'Car Insurance': carInsuranceSept,
      'House Insurance': houseInsuranceSept,
      'Life Insurance': lifeInsuranceSept,
      Mortgage: mortgageSept,
      'Gas & Auto': gasAutoSept,
      Groceries: groceriesSept,
      Cell: cellSept,
      'Cable TV': cableTVSept,
      Gas: gasSept,
      'Hydro Misc': hydroSept,
      'Water Heater': waterHeaterSept,
      'House Alarm': houseAlarmSept,
    },
    {
      Date: 'Oct',
      'Car Insurance': carInsuranceOct,
      'House Insurance': houseInsuranceOct,
      'Life Insurance': lifeInsuranceOct,
      Mortgage: mortgageOct,
      'Gas & Auto': gasAutoOct,
      Groceries: groceriesOct,
      Cell: cellOct,
      'Cable TV': cableTVOct,
      Gas: gasOct,
      'Hydro Misc': hydroOct,
      'Water Heater': waterHeaterOct,
      'House Alarm': houseAlarmOct,
    },
    {
      Date: 'Nov',
      'Car Insurance': carInsuranceNov,
      'House Insurance': houseInsuranceNov,
      'Life Insurance': lifeInsuranceNov,
      Mortgage: mortgageNov,
      'Gas & Auto': gasAutoNov,
      Groceries: groceriesNov,
      Cell: cellNov,
      'Cable TV': cableTVNov,
      Gas: gasNov,
      'Hydro Misc': hydroNov,
      'Water Heater': waterHeaterNov,
      'House Alarm': houseAlarmNov,
    },
    {
      Date: 'Dec',
      'Car Insurance': carInsuranceDec,
      'House Insurance': houseInsuranceDec,
      'Life Insurance': lifeInsuranceDec,
      Mortgage: mortgageDec,
      'Gas & Auto': gasAutoDec,
      Groceries: groceriesDec,
      Cell: cellDec,
      'Cable TV': cableTVDec,
      Gas: gasDec,
      'Hydro Misc': hydroDec,
      'Water Heater': waterHeaterDec,
      'House Alarm': houseAlarmDec,
    },
  ]

  return (
    <>
      <ResponsiveBar
        data={houseExpenseData}
        keys={[
          'Car Insurance',
          'House Insurance',
          'Life Insurance',
          'Mortgage',
          'Gas & Auto',
          'Groceries',
          'Cell',
          'Cable TV',
          'Gas',
          'Hydro',
          'Water Heater',
          'House Alarm',
        ]}
        indexBy='Date'
        margin={{ top: 20, right: 300, bottom: 20, left: 140 }}
        padding={0.3}
        groupMode='stacked'
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
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 150,
            translateY: 10,
            itemsSpacing: 3,
            itemWidth: 80,
            itemHeight: 25,
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

export default HomeExpenseBar
