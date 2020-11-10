
import logo from '../../assets/edigital_wolf_logo.png'
import './companyinfo.css'
import React from 'react'

const CompanyInfo = ()=>{
    return (
        <div className="companyInfo">
            <img src={logo} className="logo" height="62px" alt="Logo"/>
            <h3 className="name">EDigital Wolf</h3>
            <p className="address">Shri Siddhi  Behind SBI Bank, Sasane Nagar <br/>Hadapsar, Pune <br/>Maharashtra 411028</p>
        </div>
    )
}

export default CompanyInfo;
