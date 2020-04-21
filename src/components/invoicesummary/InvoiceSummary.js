import React, {Component} from 'react'
import './invoiceSummary.css';

export default class InvoiceSummary extends Component {
    render() {
        return (
            <div className="InvoiceSummary">
                <p className="totalLabel">Total</p>
                <p className="total">{this.props.total}</p>
                <p className="paymentMethodLabel">Payment Method</p>
                <input 
                    className="paymentMethod"
                    type="text" 
                    placeholder="Payment method" 
                    value={this.props.paymentMethod}
                    onChange={(event)=>this.props.onPaymentMethodChange(event)}/>
            </div>
        );
    }
}
