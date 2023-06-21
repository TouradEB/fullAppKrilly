import React from 'react'
import { Button , useTheme } from "@mui/material";
export default function ActionButton(props) {
    const { color, children, onClick } = props;
    // const theme = useTheme() ;
  return (
   
       <Button
             color={color}
            onClick={onClick}>
           { children }

        </Button>
    
  )
}
