import React from 'react';
import './invoiceHeader.css';
import {format } from 'date-fns';
import DatePopover from '../datepopover/DatePopover';

export default class InvoiceHeader extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            issueDateOpen:false,
            issueDateAnchor:null,
            dueDateOpen:false,
            dueDateAnchor:null
        }
    }

    onIssueDateClick(event){
        this.setState({...this.state, issueDateAnchor:event.target, issueDateOpen:true});
    }

    onIssueDateChange(date){
        this.props.onIssueDateChange(date);
    }

    onIssueDateClose(){
        this.setState({...this.state, issueDateAnchor:null, issueDateOpen:false})
    }
    
    onDueDateClick(event){
        this.setState({...this.state, dueDateAnchor:event.target, dueDateOpen:true});
    }

    onDueDateChange(date){
        this.props.onDueDateChange(date);
    }

    onDueDateClose(){
        this.setState({...this.state, dueDateAnchor:null, dueDateOpen:false})
    }

    render() {
        return (
            <div className="InvoiceHeader">
                <p className="billedToLabel">Billed to</p>
                <input type="text" placeholder="Enter Customer name" maxLength="82" className="billedTo" value={this.props.name} onChange={this.props.onNameChanged}/>
                <div className="billedToAddress">
                    <input type="text" placeholder="Address" maxLength="156" value={this.props.address} onChange={this.props.onAddressChanged}/>
                    <input type="text" placeholder="City, State" maxLength="156" value={this.props.cityState} onChange={this.props.onCityStateChanged}/>
                    <input type="text" placeholder="Country, Zip code" maxLength="156" value={this.props.countryZipCode} onChange={this.props.onCountryZipCodeChanged}/>
                </div>
                <p className="invoiceNoLabel">Invoice no.</p>
                <p className="invoiceNo">{this.props.invoiceNo}</p>
                <p className="issueDateLabel">Issue Date</p>
                <p className="issueDate" onClick={(event)=>this.onIssueDateClick(event)}>{format(this.props.issueDate, "dd/MM/yyyy")}</p>
                <p className="dueDateLabel">Due Date</p>
                <p className="dueDate" onClick={(event)=>this.onDueDateClick(event)}>{format(this.props.dueDate, "dd/MM/yyyy")}</p>
                <p className="invoiceTotalLabel">Invoice Total</p>
                <p className="invoiceTotal">
                    <select value={this.props.currency} onChange={this.props.onCurrencyChanged}>
                        <option value="$">$</option>
                        <option value="£">£</option>
                        <option value="€">€</option>
                    </select> {this.props.total.toFixed(2).toString()}</p>
                <DatePopover 
                        anchor={this.state.issueDateAnchor} 
                        onDateChange={this.onIssueDateChange.bind(this)} 
                        onDateClose={this.onIssueDateClose.bind(this)} 
                        open={this.state.issueDateOpen} 
                        date={this.props.issueDate}/>
                <DatePopover 
                        anchor={this.state.dueDateAnchor} 
                        onDateChange={this.onDueDateChange.bind(this)} 
                        onDateClose={this.onDueDateClose.bind(this)} 
                        open={this.state.dueDateOpen} 
                        date={this.props.dueDate}/>
            </div>
        );
    }
}