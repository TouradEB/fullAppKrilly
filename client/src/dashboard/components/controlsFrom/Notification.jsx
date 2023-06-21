// import { Snackbar, Alert } from '@mui/material';

// export default function Notification(props) {
//   const { notify, setNotify } = props;

//   const handleClose = () => {
//     setNotify({ ...notify, isOpen: false });
//   };

//   return (
//     <Snackbar 
//     open={notify.isOpen} 
//     autoHideDuration={3000} 
//     anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//     onClose={handleClose}
    
//     >

//       <Alert severity={notify.type} onClose={handleClose}>
//         {notify.message}
//       </Alert>
//     </Snackbar>
//   );
// }

import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const Notification = (props) => {
  const { notify, setNotify } = props;

  const handleClose = () => {
    setNotify({ ...notify, isOpen: false });
  };

  const severity = ['error', 'info', 'success', 'warning'].includes(notify.type)
    ? notify.type
    : 'info';

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert severity={severity} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
