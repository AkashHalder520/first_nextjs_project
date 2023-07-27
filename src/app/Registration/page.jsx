'use client'

import { Avatar, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import LoginIcon from '@mui/icons-material/Login';
import Image from 'next/image'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Link from 'next/link';
import { MuiFileInput } from 'mui-file-input';
export default function page() {
    const [user, setUser]=useState({
        first_name: "",
        last_name:"",
        email:"",
        password:""
    })
    const[profile_pic , setProfile_pic]=useState()
    const [error, setError]=useState({})
    const [showPassword, setShowPassword] = useState(false)
    const handelchange = (event) => {
        console.log(event);
        let name = event.target.name;
        let value = event.target.value

        if (name === "email") {
            if (value.length == 0) {
                setError({ ...error, email: "enter the valid email" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" });
                setUser({ ...user, email: value });
            }
        }
        if (name === "first_name") {
            if (value.length === 0) {
                setError({ ...error, first_name: "@first name required" });
                setUser({ ...user, first_name: "" });
            } else {
                setError({ ...error, first_name: "" });
                setUser({ ...user, first_name: value });
            }
        }
        if (name === "last_name") {
            if (value.length === 0) {
                setError({ ...error, last_name: "@first name required" });
                setUser({ ...user, last_name: "" });
            } else {
                setError({ ...error, last_name: "" });
                setUser({ ...user, last_name: value });
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "passwordrequired" });
                setUser({ ...user, password: "" });
            } else {
                setError({ ...error, password: "" });
                setUser({ ...user, password: value });
            }
        }
    }
    const validation=()=>{
        let error={}
        let regx=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!user.email){
            error.email="please enter a email"
        }else if(!regx.test(user.email)){
            error.email="please enter a valid email"
        }
        if(!user.first_name){
            error.first_name="please enter the first name"
        }
        if(!user.last_name){
            error.last_name="please enter the last name"
        }
        if(!user.password){
            error.password="please enter the password"
        }
    }

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
            <h2>Registration</h2>

          </Grid>


          <TextField fullWidth label="email" id="fullWidth" sx={{ mb: 3 }} onChange={handelchange} />
          <FormControl fullWidth  >
            <InputLabel htmlFor="outlined-adornment-password"  >Password</InputLabel>
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
              onChange={handelchange}
              name='password'
            />
            </FormControl>
            <TextField fullWidth label="First Name" id="fullWidth" sx={{ mb: 3 }} onChange={handelchange} name='first_name'/>
            <TextField fullWidth label="Last Name" id="fullWidth" sx={{ mb: 3 }} onChange={handelchange} name='last_name' />
           <input type="file" name="" id="" onChange={(e) => setProfile_pic(e.target.files[0])} />
           {profile_pic !== "" && profile_pic !== undefined && profile_pic !== null ? (<img src={URL.createObjectURL(profile_pic)} alt=""style="max-width: 100%;  
height: auto;  " />) : ("no image")}
          <Button variant="contained" sx={{ margin: '10%', fontSize:'large'}} color="primary" type='submit'>
            Submit
          </Button>
          
        </Paper>

      </Grid>
    </>
  )
}
