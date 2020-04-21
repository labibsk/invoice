import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function WarningSnackbar(props) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.onErrorClose();
  };

  return (
    <Snackbar open={props.open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
        {props.error}
        </Alert>
    </Snackbar>
  );
}