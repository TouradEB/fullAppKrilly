import React from 'react'
import TextField from '@mui/material/TextField';

export default function PasswordF(props) {

    const {name , label , value , error=null , onChange}=props
  return (
    <TextField 
   
    variant="outlined"
    label={label}
      type='password'
      name={name}
      value={value}
      onChange={onChange}
      {...(error && {error:true,helperText:error})}
    />
  )
}
