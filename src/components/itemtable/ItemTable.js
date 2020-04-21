import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Item from '../item/Item'
import StyledTableCell from './StyledTableCell'
import './itemTable.css';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Description of Service</StyledTableCell>
                    <StyledTableCell width="80px" align="right">Quantity</StyledTableCell>
                    <StyledTableCell align="right">Rate Per</StyledTableCell>
                    <StyledTableCell align="right">Discount</StyledTableCell>
                    <StyledTableCell align="right">Amount</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {props.items.map((item) => (
                <Item 
                    data={item}
                    key={item.id}
                    onDelete={(id)=>props.onDelete(id)}
                    onUpdateName={(id, name)=>props.onUpdateName(id, name)}
                    onUpdateQuantity={(id, quantity)=>props.onUpdateQuantity(id, quantity)}
                    onUpdateRatePer={(id, ratePer)=>props.onUpdateRatePer(id, ratePer)}
                    onUpdateDiscount={(id, discount)=>props.onUpdateDiscount(id, discount)}/>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}