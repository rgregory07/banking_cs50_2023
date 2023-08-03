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

  // Bell - Cell
  const bellJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const bellDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Bell - Cell')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Rogers
  const rogersJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const rogersDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Rogers')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  // Enbridge Gas
  const enbridgeGasJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const enbridgeGasDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Enbridge Gas')
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

  // Reliance Water Heater
  const relianceJan =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-01-01' &&
          item.transaction_date <= '2023-01-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceFeb =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-02-01' &&
          item.transaction_date <= '2023-02-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceMar =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-03-01' &&
          item.transaction_date <= '2023-03-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceApril =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-04-01' &&
          item.transaction_date <= '2023-04-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceMay =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-05-01' &&
          item.transaction_date <= '2023-05-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceJune =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-06-01' &&
          item.transaction_date <= '2023-06-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceJuly =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-07-01' &&
          item.transaction_date <= '2023-07-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceAug =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-08-01' &&
          item.transaction_date <= '2023-08-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceSept =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-09-01' &&
          item.transaction_date <= '2023-09-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceOct =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-10-01' &&
          item.transaction_date <= '2023-10-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceNov =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-11-01' &&
          item.transaction_date <= '2023-11-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
      .reduce((acc, value) => acc + parseFloat(value.amount), 0)
      .toFixed(0) * -1

  const relianceDec =
    bankData
      .filter(
        (item) =>
          item.transaction_date >= '2023-12-01' &&
          item.transaction_date <= '2023-12-31'
      )
      .filter((item) => item.sub_category === 'Reliance Water Heater')
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
      'Bell - Cell': bellJan,
      Rogers: rogersJan,
      'Enbridge Gas': enbridgeGasJan,
      'Hydro Misc': hydroJan,
      'Reliance Water Heater': relianceJan,
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
      'Bell - Cell': bellFeb,
      Rogers: rogersFeb,
      'Enbridge Gas': enbridgeGasFeb,
      'Hydro Misc': hydroFeb,
      'Reliance Water Heater': relianceFeb,
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
      'Bell - Cell': bellMar,
      Rogers: rogersMar,
      'Enbridge Gas': enbridgeGasMar,
      'Hydro Misc': hydroMar,
      'Reliance Water Heater': relianceMar,
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
      'Bell - Cell': bellApril,
      Rogers: rogersApril,
      'Enbridge Gas': enbridgeGasApril,
      'Hydro Misc': hydroApril,
      'Reliance Water Heater': relianceApril,
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
      'Bell - Cell': bellMay,
      Rogers: rogersMay,
      'Enbridge Gas': enbridgeGasMay,
      'Hydro Misc': hydroMay,
      'Reliance Water Heater': relianceMay,
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
      'Bell - Cell': bellJune,
      Rogers: rogersJune,
      'Enbridge Gas': enbridgeGasJune,
      'Hydro Misc': hydroJune,
      'Reliance Water Heater': relianceJune,
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
      'Bell - Cell': bellJuly,
      Rogers: rogersJuly,
      'Enbridge Gas': enbridgeGasJuly,
      'Hydro Misc': hydroJuly,
      'Reliance Water Heater': relianceJuly,
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
      'Bell - Cell': bellAug,
      Rogers: rogersAug,
      'Enbridge Gas': enbridgeGasAug,
      'Hydro Misc': hydroAug,
      'Reliance Water Heater': relianceAug,
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
      'Bell - Cell': bellSept,
      Rogers: rogersSept,
      'Enbridge Gas': enbridgeGasSept,
      'Hydro Misc': hydroSept,
      'Reliance Water Heater': relianceSept,
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
      'Bell - Cell': bellOct,
      Rogers: rogersOct,
      'Enbridge Gas': enbridgeGasOct,
      'Hydro Misc': hydroOct,
      'Reliance Water Heater': relianceOct,
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
      'Bell - Cell': bellNov,
      Rogers: rogersNov,
      'Enbridge Gas': enbridgeGasNov,
      'Hydro Misc': hydroNov,
      'Reliance Water Heater': relianceNov,
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
      'Bell - Cell': bellDec,
      Rogers: rogersDec,
      'Enbridge Gas': enbridgeGasDec,
      'Hydro Misc': hydroDec,
      'Reliance Water Heater': relianceDec,
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
          'Bell - Cell',
          'Rogers',
          'Enbridge Gas',
          'Hydro',
          'Reliance Water Heater',
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
