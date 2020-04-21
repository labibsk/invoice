import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import GetAppIcon from '@material-ui/icons/GetApp';
import {PDFDownloadLink} from '@react-pdf/renderer';
import SaveButton from '../../SaveButton'
import InvoicePdf from '../invoicepdf/InvoicePdf'
import {Box} from '@material-ui/core'
import classes from 'classes'

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
            <Box className="downloadButtonContainer">
                <PDFDownloadLink
                    document={<InvoicePdf data={props.data}/>}
                    fileName={`invoice${props.data.invoiceNo.toString()}.pdf`}
                    style={{
                    textDecoration: "none",
                    padding: "10px",
                    color: "#4a4a4a",
                    backgroundColor: "#fff",
                    }}>
                    {({ blob, url, loading, error }) =>
                        <SaveButton className="downloadButton" variant="extended">
                            <GetAppIcon className={classes.extendedIcon} style={{marginRight:'10px'}}/>{ loading ? "Loading document..." : "Download Pdf"}
                        </SaveButton>
                    }
                </PDFDownloadLink>

            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}