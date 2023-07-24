import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Margin } from '@mui/icons-material';


function Home() {
  return (
    <>
        <Box className='hero1 hero1-img'>
          <Grid container spacing={2}>
            <Grid xs={2} md={6} lg={4}> 
              <img className='student1' src='homepics/student1.png' alt='student1.1'/>
            </Grid>
            <Grid xs={8} md={4} lg={4}>
              <img src="homepics/Group3.svg" alt="icon" />
              <Typography variant='h4' align='left' paddingTop='0px' style={{color:'#4E9CF5', fontWeight: 'bold'}}>
              Find Your Perfect Scholarship Today!
              </Typography>
              <Typography style={{color:'white', marginBottom:'50px'}} >
              <p>SkularPH is an innovative scholarship search platform dedicated to connecting students with a wide array of scholarships and financial aid tools. Our primary mission is to assist you in discovering scholarships that will make your educational journey more affordable. With SkularPH, finding the right funding opportunities for your academic pursuits has never been easier.
              </p>
              </Typography>
              <Button variant="contained">APPLY FOR SCHOLARHIP NOW</Button>
            </Grid>          
         </Grid>
        </Box>
    </>
  )
}

export default Home
