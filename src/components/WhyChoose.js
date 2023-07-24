// import React from 'react'
// import { Typography, Grid, Box } from '@mui/material';


// function WhyChoose() {
//   return (
  
//       <Grid container spacing={2} columns={16} className='hero2'>
//         <Grid  xs={8} md={6}>
//           <Typography variant='h4'>Why Choose Us?</Typography>
//           <Typography variant='h6' marginTop='20px'>
//             1. A Plethora of Scholarship:
//           </Typography>
//           <p>Our platform curates an extensive database of scholarships from various sources, including universities, organizations, and benefactors. Whether you're an undergraduate or graduate student, pursuing a specific field of study or facing unique challenges, we have scholarships tailored to your needs.
//           </p>
//         </Grid>

//         <Grid  xs={8} md={6}>
//           <img className='background3' src='homepics/background3.png' alt='pic2' />
//         </Grid>
//       </Grid>
//   )
// }

// export default WhyChoose
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function WhyChoose() {
  return (
    <Box sx={{ flexGrow: 1 }} className='hero2'>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
        <Typography variant='h4'>Why Choose Us?</Typography>
        <Typography variant='h6' marginTop='20px' mb='10px'>
         1. A Plethora of Scholarship:
         </Typography>
        <p>Our platform curates an extensive database of scholarships from various sources, including universities, organizations, and benefactors. Whether you're an undergraduate or graduate student, pursuing a specific field of study or facing unique challenges, we have scholarships tailored to your needs.
        </p>
        <Typography variant='h6' marginTop='20px' mb='10px'>
        2. User-Friendly Experience:
         </Typography>
        <p>We've designed our website with simplicity and ease of use in mind. Our intuitive interface allows you to effortlessly navigate through scholarships, filter search results, and apply with just a few clicks.
          </p>
        <Typography variant='h6' marginTop='20px' mb='10px'>
        3. Expert Guidance:
        </Typography>
        <p>
        Our team of education experts is dedicated to providing you with the best advice and guidance on the scholarship application process. From crafting compelling essays to acing interviews, we are here to support you every step of the way.
        </p>
        </Grid>
        
        <Grid xs={8}>
        
          <img className='background3' src='homepics/background3.png' alt='pic2' />
            <Typography variant='h6' marginTop='20px' mb='10px'>
            4. Privacy and Security:
          </Typography>
          <p>
          We value your trust, which is why we prioritize the privacy and security of your information. Rest assured that your personal data is handled with the utmost confidentiality and protected by robust security measures.
          </p>
          </Grid>
      </Grid>
    </Box>
  );
}