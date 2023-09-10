import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';

export default function InputBoxEmail() {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
          color : "white" ,
          backgroundColor : "#060606"
        }} 
      >
        <TextField style={{color : "white" }} InputLabelProps={{style: { color: '#fff'}}} sx={{ input: { color: 'white' }}}
          // helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Enter Email"
        />
        {/* <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Name"
        /> */}
      </Box>
    );
  }