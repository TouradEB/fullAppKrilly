
import React from 'react'
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import ButtonF from './controlsFrom/Button';
import ActionButton from './controlsFrom/ActionButton';
import CloseIcon from '@mui/icons-material/Close';
export default function Popup(props) {

    const {title , children , openPopup , setOpenPopup} = props ;
  return (
   <Dialog open={openPopup} maxWidth="md">
    <DialogTitle sx={{paddingRight:'0px'}}>
        <div style={{display:'flex'}}>
            <Typography variant='h6' component="div" style={{flexGrow:1}}>
                {title}
            </Typography>
            <ActionButton
            color="error"
             onClick={()=>{setOpenPopup(false)}}>
            
                <CloseIcon />
            </ActionButton>
        </div>
    </DialogTitle>
    <DialogContent dividers>
        {children}
    </DialogContent>
   </Dialog>
  )
}
