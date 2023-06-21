import { InputLabel, Select as MuiSelect , MenuItem , FormControl , FormHelperText} from '@mui/material';
import React from 'react'

export default function SelectF(props) {

    const {name , label , value , error=null , onChange , option} = props ;

  return (
    <FormControl 
    variant="outlined"
     {...(error && {error:true})}
    >


      <InputLabel>{label}</InputLabel>
      <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                 {
                    option.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
          </MuiSelect>  
          {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
