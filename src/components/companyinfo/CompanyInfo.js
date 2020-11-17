
import logo from '../../assets/edigital_wolf_logo.png'
import './companyinfo.css'
import React from 'react'

const CompanyInfo = ()=>{
    return (
        <div className="companyInfo">
            <img src={logo} className="logo" height="62px" alt="Logo"/>
            <h3 className="name">EDigital Wolf</h3>
            <p className="address">12840 Pennybridge Dr Bridgeton<br/>Missouri, California, <br/>United States ,63044</p>
        </div>
    )
}

export default CompanyInfo;
