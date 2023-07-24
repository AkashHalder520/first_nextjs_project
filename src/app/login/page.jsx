'use client';

import { Avatar, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import LoginIcon from '@mui/icons-material/Login';
import Image from 'next/image'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';

export default function page() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show)
  }

  const paperstyle = { padding: 20, height: '70vh', width: '50vh', margin: '20% auto' }
  return (
    <>
      <Grid align='center'>
        <Paper elevation={10} style={paperstyle}>
          <Grid align='center'>
            <Avatar sx={{ bgcolor: green[500], width: '100px', height: '100px' }} >
              <LoginIcon style={{ width: '50px', height: '50px' }} />
            </Avatar>
            <h2>Sign In</h2>

          </Grid>


          <TextField fullWidth label="email" id="fullWidth" sx={{ mb: 3 }} />
          <FormControl fullWidth  >
            <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}

                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />

          </FormControl>
          <Button variant="contained" sx={{ margin: '10%' }} color="primary">
            Submit
          </Button>
          <Typography >
            <Link href="#" >
              Forgot password ?
            </Link>
          </Typography>
          <Typography > Do you have an account ?
            <Link href="#" >
              Sign Up
            </Link>
          </Typography>
        </Paper>

      </Grid>
      {/* <Image   src="/background.jpg" alt="logo"  objectFit="Contain" fill={true}/> */}


    </>
  )
}
