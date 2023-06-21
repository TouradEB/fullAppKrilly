import React from 'react'
import { Button as MuiButton , useTheme } from "@mui/material";



export default function ButtonF(props) {
     const { text, size, color, variant, onClick, ...other } = props 
     const theme = useTheme() 

  return (
    <MuiButton
    variant={variant || "contained"}
    size={size || "large"}
    color={color || "primary"}
    onClick={onClick}
    {...other}
    sx={{ margin: theme.spacing(0.5), textTransform: 'none', marginLeft: 'auto' }}
      >
       
    {text}
  </MuiButton>
  )
}
