import React from 'react';
import CompanyInfo from '../companyinfo/CompanyInfo'
import './header.css';

export default ()=>{
    return (
        <div className="Header">            
            <CompanyInfo className="company"/>       
            <h3 className="invoiceTitle">Invoice</h3>
        </div>
    )
}