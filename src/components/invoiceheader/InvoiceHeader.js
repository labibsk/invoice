import React from 'react';
import './invoiceHeader.css';
import {format } from 'date-fns';
import DatePopover from '../datepopover/DatePopover';

export default class InvoiceHeader extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            open:false,
            anchor:null
        }
    }

    onDateClick(event){
        this.setState({anchor:event.target, open:true});
    }

    onDateChange(date){
        this.props.onDateChange(date);
    }

    onDateClose(){
        this.setState({anchor:null, open:false})
    }

    render() {
        return (
            <div className="InvoiceHeader">
                <p className="billedToLabel">Billed to</p>
                <input type="text" placeholder="Enter Customer name" maxLength="82" className="billedTo" value={this.props.name} onChange={this.props.onNameChanged}/>
                <textarea className="billedToAddress" placeholder="Enter Customer address" maxLength="156" rows="3" value={this.props.address} onChange={this.props.onAddressChanged}/>
                <p className="invoiceNoLabel">Invoice no.</p>
                <p className="invoiceNo">{this.props.invoiceNo}</p>
                <p className="issueDateLabel">Issue Date</p>
                <p className="issueDate" onClick={(event)=>this.onDateClick(event)}>{format(this.props.date, "dd/MM/yyyy")}</p>
                <p className="invoiceTotalLabel">Invoice Total</p>
                <p className="invoiceTotal">$ {this.props.total.toFixed(2).toString()}</p>
                <DatePopover 
                        anchor={this.state.anchor} 
                        onDateChange={this.onDateChange.bind(this)} 
                        onDateClose={this.onDateClose.bind(this)} 
                        open={this.state.open} 
                        date={this.props.date}/>
            </div>
        );
    }
}