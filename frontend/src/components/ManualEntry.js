import React, { useEffect, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Formik, Field, useField, ErrorMessage } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import axios from 'axios'
import Header from './Header'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'

import CloseIcon from '@mui/icons-material/Close'
import {
  CategoryList,
  SubcategoryHouse,
  SubcategoryPebbles,
  SubcategoryKidlet,
  SubcategoryMedical,
  SubcategoryMisc,
  SubcategoryIncome,
  SubcategorySavings,
  SubcategoryRyanFreelance,
  SubcategoryBlank,
} from '../data/CategoryData'

// Manual Entry Code

const initialValues = {
  transactionDate: ' ',
  amount: '',
  // account: '',
  description: '',
  notes: '',
  // paymentMethod: '',
  category: '',
  subcategory: '',
}

const transactionSchema = yup.object().shape({
  transactionDate: yup.string().required('required'),
  amount: yup.string().required('required'),
  // account: yup.string().required("required"),
  description: yup.string().required('required'),
  notes: yup.string().required('required'),
  // paymentMethod: yup.string().required("required"),
  category: yup.string(),
  subcategory: yup.string(),
})

const handleFormSubmit = (data, { resetForm, setFieldTouched }) => {
  let url = `http://localhost:8000/api/bankdata-api/`
  axios
    .post(
      url,
      {
        account: data.account,
        amount: data.amount,
        category: data.category,
        description_1: data.description,
        notes: data.notes,
        sub_category: data.subcategory,
        transaction_date: data.transactionDate,
      },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => console.log(err))
}

const ManualEntry = () => {
  const isNonMobile = useMediaQuery('min-width: 600px')
  const [open, setOpen] = useState(false)
  const [catValue, setCatValue] = useState()
  const catData = CategoryList
  const [subcatData, setSubcatData] = useState(SubcategoryBlank)
  const [subcatValue, setSubcatValue] = useState()
  const [submit, setSubmit] = useState(false)

  const SelectCat = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    // const subCat = function(value) {
    let selectedCategory = catValue
    useEffect(() => {
      if (selectedCategory === 'Household') {
        setSubcatData(SubcategoryHouse)
      }
      if (selectedCategory === 'Pebbles & Pine') {
        setSubcatData(SubcategoryPebbles)
      }
      if (selectedCategory === 'Kidlet Kare') {
        setSubcatData(SubcategoryKidlet)
      }
      if (selectedCategory === 'Medical') {
        setSubcatData(SubcategoryMedical)
      }
      if (selectedCategory === 'Misc') {
        setSubcatData(SubcategoryMisc)
      }
      if (selectedCategory === 'Income') {
        setSubcatData(SubcategoryIncome)
      }
      if (selectedCategory === 'Savings') {
        setSubcatData(SubcategorySavings)
      }
      if (selectedCategory === 'Ryan Freelance') {
        setSubcatData(SubcategoryRyanFreelance)
      }
    }, [])

    return (
      <div>
        <select
          {...field}
          {...props}
          value={catValue}
          onChange={(e) => setCatValue(e.target.value)}
        >
          {catData.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {meta.touched && meta.error ? (
          <div className='error'>{meta.error}</div>
        ) : null}
      </div>
    )
  }

  const SelectSubCat = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
      <div>
        <select
          {...field}
          {...props}
          value={subcatValue}
          onChange={(e) => setSubcatValue(e.target.value)}
        >
          {subcatData.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {meta.touched && meta.error ? (
          <div className='error'>{meta.error}</div>
        ) : null}
      </div>
    )
  }

  return (
    <>
      <Box m='20px'>
        <Header
          title='Add New Transaction'
          subTitle="Manually enter a transaction that doesn't appear on the other statements"
        />

        <h4 className='mb-2' style={{ color: 'var(--clr-main-light)' }}>
          * When entering an expense, use the minus symbol (-) in Amount
        </h4>
        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            submit,
            submitting,
            setErrors,
            resetForm,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display='grid'
                gap='30px'
                gridTemplateColumns='repeat(4, minmax(1, 1fr))'
                sx={{
                  '& > div': { gridColumn: isNonMobile ? 'span 2' : 'span 4' },
                }}
              >
                <TextField
                  fullWidth
                  variant='outlined'
                  type='date'
                  label='Transaction Date'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.transactionDate}
                  name='transactionDate'
                  error={!!touched.transactionDate && !!errors.transactionDate}
                  helperText={touched.transactionDate && errors.transactionDate}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  variant='outlined'
                  type='number'
                  label='Amount'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.amount}
                  name='amount'
                  error={!!touched.amount && !!errors.amount}
                  helperText={touched.amount && errors.amount}
                  sx={{ gridColumn: 'span 2' }}
                />
                {/* <TextField
                  fullWidth
                  variant='filled'
                  type='text'
                  label='Account'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.account}
                  name="account"
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                  sx={{ gridColumn: "span 2" }}
                  /> */}
                <TextField
                  fullWidth
                  variant='outlined'
                  type='text'
                  label='Description'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                  name='description'
                  error={!!touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  variant='outlined'
                  type='text'
                  label='Notes'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.notes}
                  name='notes'
                  error={!!touched.notes && !!errors.notes}
                  helperText={touched.notes && errors.notes}
                  sx={{ gridColumn: 'span 2' }}
                />
                <Box sx={{ gridColumn: 'span 2' }}>
                  <SelectCat
                    className='dropdown'
                    label='category'
                    name='category'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={catValue}
                  />
                </Box>
                <Box sx={{ gridColumn: 'span 2' }}>
                  <SelectSubCat
                    className='dropdown'
                    label='subcategory'
                    name='subcategory'
                    value={subcatValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Box>
              </Box>

              <Box justifyContent='start' mt='20px' className='grid-buttons'>
                <Collapse in={isSubmitting}>
                  <Alert
                    severity='success'
                    action={
                      <IconButton
                        aria-label='close'
                        color='inherit'
                        size='small'
                        onClick={() => {
                          setOpen(false)
                          resetForm()
                          setCatValue()
                          setSubcatValue()
                        }}
                      >
                        <h6>Close </h6>
                        <CloseIcon fontSize='inherit' />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Transaction Successfully Added!
                  </Alert>
                </Collapse>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  variant='outlined'
                  onClick={() => {
                    values.category = catValue
                    values.subcategory = subcatValue
                  }}
                >
                  Create New Transaction
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  )
}

export default ManualEntry
