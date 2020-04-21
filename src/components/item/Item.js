import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import StyledTableRow from '../itemtable/StyledTableRow';
import StyledTableCell from '../itemtable/StyledTableCell';
import ButtonBase from '@material-ui/core/ButtonBase';

export default class Item extends React.Component {

    constructor(props){
        super(props);

        this.cellFieldStyle = {
            fontFamily:'Montserrat',
            background:'none',
            outline:'none',
            border:'none',
            width: '100%'
        }

        this.cellFieldStyleRightAlign = {
            fontFamily:'Montserrat',
            background:'none',
            outline:'none',
            border:'none',
            textAlign:'right',
            width:"60px"
        }

    }

    handleItemNameChange(event){
        this.props.onUpdateName(this.props.data.id, event.target.value);
    }
    
    handleDiscountChange(event){
        this.props.onUpdateDiscount(this.props.data.id, event.target.value === '' ? '' : parseInt(event.target.value));
    }
    
    handleQuantityChange(event){
        this.props.onUpdateQuantity(this.props.data.id, event.target.value === '' ? '' : parseFloat(event.target.value));
    }
    
    handleRatePerChange(event){
        this.props.onUpdateRatePer(this.props.data.id, event.target.value === '' ? '' : parseFloat(event.target.value));
    }

    render() {
        return (
            <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                    <input type="text" placeholder="Item name" style={this.cellFieldStyle} value={this.props.data.name} onChange={(event)=>this.handleItemNameChange(event)}/>
                </StyledTableCell>
                <StyledTableCell align="right"><input type="number" placeholder="Quantity" style={this.cellFieldStyleRightAlign} value={this.props.data.quantity} onChange={(event)=>this.handleQuantityChange(event)}/></StyledTableCell>
                <StyledTableCell align="right"><input type="number" step="0.01"  placeholder="Rate Per" style={this.cellFieldStyleRightAlign} value={this.props.data.ratePer} onChange={(event)=>this.handleRatePerChange(event)}/></StyledTableCell>
                <StyledTableCell align="right"><input type="number" step="0.01"  placeholder="Discount" style={this.cellFieldStyleRightAlign} value={this.props.data.discount} onChange={(event)=>this.handleDiscountChange(event)}/></StyledTableCell>
                <StyledTableCell align="right">{this.props.data.amount}</StyledTableCell>
                <StyledTableCell style={{ padding:0 }}>
                    <ButtonBase onClick={()=>this.props.onDelete(this.props.data.id)} style={{ padding:'15px', width:'100%', height:'100%' }}>
                        <DeleteIcon color="primary" />
                    </ButtonBase>
                </StyledTableCell>
            </StyledTableRow>
        );
    }
}
