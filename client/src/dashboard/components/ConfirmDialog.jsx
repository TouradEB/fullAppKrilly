// import React from 'react'
// import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material'
// import ButtonF from './controlsFrom/Button'
// import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
// import SensorsIcon from '@mui/icons-material/Sensors';
// import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

// export default function ConfirmDialogIm(props) {
//   const { ConfirmDialog, setConfirmDialog } = props;
//   if (ConfirmDialog.title == 'approve this record?') {
//   return (
    
//     <Dialog open={ConfirmDialog.isOpen} PaperProps={{ sx: { padding: '2rem', position: 'absolute', top: '5rem' } }}>
//       <DialogTitle sx={{ textAlign: 'center' }} >
//       <IconButton disableRipple sx={{ backgroundColor: '#F5F5F5', color: '#76FF03', '&:hover': { backgroundColor: '#CCFF90', cursor: 'default' }, '& .MuiSvgIcon-root': { fontSize: '8rem' } }}>
//           <SensorsIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent sx={{ textAlign: 'center' }}>
//           <Typography variant='h6'>
//           {ConfirmDialog.title}
//           </Typography>
//           <Typography variant='subtitle2'>
//             {ConfirmDialog.subTitle}
//           </Typography>
//       </DialogContent>
//       <DialogActions sx={{ justifyContent: 'center' }}>
//       <ButtonF
//         text="No"
//           color="inherit"
//           onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })} /> 
        
//         <ButtonF
//           text="yes"
//           color="success"
//           onClick={ConfirmDialog.onConfirm} /> 

        
//       </DialogActions>
    

    
//     </Dialog>
//   ) ;
//     }
//     if(ConfirmDialog.title == 'are you sure to desactive this record?') {
//     return (
//         <Dialog open={ConfirmDialog.isOpen} PaperProps={{ sx: { padding: '2rem', position: 'absolute', top: '5rem' } }}>
//         <DialogTitle sx={{ textAlign: 'center' }}>
//           <IconButton disableRipple sx={{ backgroundColor: '#FFF59D', color: '#FF6F00', '&:hover': { backgroundColor: '#FFEE58', cursor: 'default' }, '& .MuiSvgIcon-root': { fontSize: '8rem' } }}>
//             <PriorityHighIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent sx={{ textAlign: 'center' }}>
//           <Typography variant="h6">{ConfirmDialog.title}</Typography>
//           <Typography variant="subtitle2">{ConfirmDialog.subTitle}</Typography>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center' }}>
//           <ButtonF text="No" color="inherit" onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })} />
//           <ButtonF text="Yes" color="warning" onClick={ConfirmDialog.onConfirm} />
//         </DialogActions>
//       </Dialog>
//     )
//   }
//   if(ConfirmDialog.title == 'Are you going to check Post'){
//     return(
//      <Dialog open={ConfirmDialog.isOpen} PaperProps={{ sx: { padding: '2rem', position: 'absolute', top: '5rem' } }}>
//         <DialogTitle sx={{ textAlign: 'center' }}>
//           <IconButton disableRipple sx={{ backgroundColor: '#0079FF', color: 'blue', '&:hover': { backgroundColor: '#9AC5F4', cursor: 'default' }, '& .MuiSvgIcon-root': { fontSize: '8rem' } }}>
//             <NotListedLocationIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent sx={{ textAlign: 'center' }}>
//           <Typography variant="h6">{ConfirmDialog.title}</Typography>
//           <Typography variant="subtitle2">{ConfirmDialog.subTitle}</Typography>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center' }}>
//           <ButtonF text="No" color="inherit" onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })} />
//           <ButtonF text="Yes"  onClick={ConfirmDialog.onConfirm} />
//         </DialogActions>
//       </Dialog>
//     );
//   }
//     return (
//         <Dialog open={ConfirmDialog.isOpen} PaperProps={{ sx: { padding: '2rem', position: 'absolute', top: '5rem' } }}>
//         <DialogTitle sx={{ textAlign: 'center' }}>
//           <IconButton disableRipple sx={{ backgroundColor: '#FFEBEE', color: '#A51C30', '&:hover': { backgroundColor: '#FFCDD2', cursor: 'default' }, '& .MuiSvgIcon-root': { fontSize: '8rem' } }}>
//             <NotListedLocationIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent sx={{ textAlign: 'center' }}>
//           <Typography variant="h6">{ConfirmDialog.title}</Typography>
//           <Typography variant="subtitle2">{ConfirmDialog.subTitle}</Typography>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center' }}>
//           <ButtonF text="No" color="inherit" onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })} />
//           <ButtonF text="Yes" color="error" onClick={ConfirmDialog.onConfirm} />
//         </DialogActions>
//       </Dialog>
//     )
  
// }


//================================= 17

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material';
import ButtonF from './controlsFrom/Button';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import SensorsIcon from '@mui/icons-material/Sensors';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function ConfirmDialogIm(props) {
  const { ConfirmDialog, setConfirmDialog } = props;

  if (ConfirmDialog.title === 'approve this record?') {
    return (
      <Dialog open={ConfirmDialog.isOpen} PaperProps={{ sx: { padding: '2rem', position: 'relative' } }}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <IconButton disableRipple sx={{ backgroundColor: '#F5F5F5', color: '#76FF03', '&:hover': { backgroundColor: '#CCFF90', cursor: 'default' }, '& .MuiSvgIcon-root': { fontSize: '6rem' } }}>
            <SensorsIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6">{ConfirmDialog.title}</Typography>
          <Typography variant="subtitle2">{ConfirmDialog.subTitle}</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <ButtonF text="No" color="inherit" onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })} />
          <ButtonF text="Yes" color="success" onClick={ConfirmDialog.onConfirm} />
        </DialogActions>
      </Dialog>
    );
  }

  if (ConfirmDialog.title === 'are you sure to desactive this record?') {
    return (
      <Dialog open={ConfirmDialog.isOpen} PaperProps={{ sx: { padding: '2rem', position: 'relative' } }}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <IconButton disableRipple sx={{ backgroundColor: '#FFF59D', color: '#FF6F00', '&:hover': { backgroundColor: '#FFEE58', cursor: 'default' }, '& .MuiSvgIcon-root': { fontSize: '6rem' } }}>
            <PriorityHighIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6">{ConfirmDialog.title}</Typography>
          <Typography variant="subtitle2">{ConfirmDialog.subTitle}</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <ButtonF text="No" color="inherit" onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })} />
          <ButtonF text="Yes" color="warning" onClick={ConfirmDialog.onConfirm} />
        </DialogActions>
      </Dialog>
    );
  }

  if (ConfirmDialog.title === 'Are you going to check Post') {
    return (
      <Dialog open={ConfirmDialog.isOpen} PaperProps={{ sx: { padding: '2rem', position: 'relative' } }}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <IconButton disableRipple sx={{ backgroundColor: '#0079FF', color: 'blue', '&:hover': { backgroundColor: '#9AC5F4', cursor: 'default' }, '& .MuiSvgIcon-root': { fontSize: '6rem' } }}>
            <NotListedLocationIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6">{ConfirmDialog.title}</Typography>
          <Typography variant="subtitle2">{ConfirmDialog.subTitle}</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <ButtonF text="No" color="inherit" onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })} />
          <ButtonF text="Yes" onClick={ConfirmDialog.onConfirm} />
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <Dialog open={ConfirmDialog.isOpen} PaperProps={{ sx: { padding: '2rem', position: 'relative' } }}>
      <DialogTitle sx={{ textAlign: 'center' }}>
        <IconButton disableRipple sx={{ backgroundColor: '#FFEBEE', color: '#A51C30', '&:hover': { backgroundColor: '#FFCDD2', cursor: 'default' }, '& .MuiSvgIcon-root': { fontSize: '6rem' } }}>
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6">{ConfirmDialog.title}</Typography>
        <Typography variant="subtitle2">{ConfirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <ButtonF text="No" color="inherit" onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })} />
        <ButtonF text="Yes" color="error" onClick={ConfirmDialog.onConfirm} />
      </DialogActions>
    </Dialog>
  );
}


