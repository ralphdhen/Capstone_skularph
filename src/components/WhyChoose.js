import React from 'react'
import { Typography, Grid, Box } from '@mui/material';


function WhyChoose() {
  return (
    <Box>

    
      <Grid cointainer Spacing={2} className='hero2'>
        <Grid xs={2} md={6} lg={4} >
          <Typography variant='h4'>Why Choose Us?</Typography>
          <Typography variant='h6' marginTop='20px'>
            1. A Plethora of Scholarship:
          </Typography>
          <p>Our platform curates an extensive database of scholarships from various sources, including universities, organizations, and benefactors. Whether you're an undergraduate or graduate student, pursuing a specific field of study or facing unique challenges, we have scholarships tailored to your needs.
          </p>
        </Grid>

        <Grid xs={2} md={6} lg={4}>
          <img className='background3' src='homepics/background3.png' alt='pic2' />
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhyChoose
