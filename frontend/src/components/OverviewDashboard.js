import React from 'react'
import { Box, Typography } from '@mui/material'

const OverviewDashboard = ({ title, color, total }) => {
  return (
    <div className='dash-pp-headers'>
      <Typography
        variant='h6'
        color='var(--clr-main)'
        fontWeight='200'
        textTransform='uppercase'
      >
        {title}
      </Typography>
      <Typography variant='h5' color={color} fontWeight='400'>
        {total}
      </Typography>
    </div>
  )
}

export default OverviewDashboard
