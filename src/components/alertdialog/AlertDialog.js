import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function AlertDialog(props) {
  
  const handleClose = () => {
    props.handleNegative();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>props.handleNegative()} color="primary">
            {props.negativeAction}
          </Button>
          <Button onClick={()=>props.handlePositive()} color="primary" autoFocus>
            {props.positiveAction}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}