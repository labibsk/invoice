import React, {Component} from 'react'
import {Document, Page, Image } from '@react-pdf/renderer'
import logo from '../../assets/digital_wolf_logo.png'
import {format} from 'date-fns'
import {
    Table,
    TableRow,
    TableCell,
    TableCellLong,
    TableHeader,
    TableHeaderCell,
    TableHeaderCellLong } from './table'
import { 
    CompanyName,
    CompanyAddress,
    InvoiceTitle,
    InvoiceTotalText,
    LabelText,
    ValueText,
    FinalLabelText,
    FinalValueText,
    DeclarationTitleText,
    DeclarationContentText,
    BilledToAddressText } from './text'
import {
    FlexVertical,
    FlexHorizontal,
    InvoiceHeader,
    DeclarationFooter
} from './layouts'

class InvoicePdf extends Component {
    
    render() {
        return (
            <Document>
                <Page>
                    <FlexVertical>
                        <FlexHorizontal style={{padding:'20pt'}}>
                            <Image src={logo} style={{width:'60pt', height:'47pt'}}/>
                            <FlexVertical>
                                <CompanyName style={{marginTop:'8pt'}}>Digital Wolf</CompanyName>
                                <CompanyAddress style={{marginTop:'8pt', width:'350pt'}}>
                                    DigitalWolf, 12840 Pennybridge Dr Bridgeton, Missouri, California, 63044, United States
                                </CompanyAddress>
                            </FlexVertical>
                            <InvoiceTitle>Invoice</InvoiceTitle>
                        </FlexHorizontal>
                        <InvoiceHeader>
                            <FlexVertical>
                                <LabelText>
                                    Billed To
                                </LabelText>
                                <ValueText>
                                    {this.props.data.customerName}
                                </ValueText>
                                <BilledToAddressText>                                
                                    {this.props.data.customerAddress}
                                </BilledToAddressText>
                            </FlexVertical>
                            <FlexVertical>
                                <LabelText>
                                    Invoice No.
                                </LabelText>
                                <ValueText>
                                    {this.props.data.invoiceNo.toString()}
                                </ValueText>
                            </FlexVertical>
                            <FlexVertical>
                                <LabelText>
                                    Issue Date
                                </LabelText>
                                <ValueText>
                                    {format(this.props.data.date, "dd/MM/yyyy")}
                                </ValueText>
                            </FlexVertical>
                            <FlexVertical>
                                <LabelText>
                                    Invoice Total
                                </LabelText>
                                <InvoiceTotalText>
                                    $ {this.props.data.total.toFixed(2).toString()}
                                </InvoiceTotalText>
                            </FlexVertical>
                        </InvoiceHeader>
                        <Table>
                            <TableHeader>
                                <TableHeaderCellLong>
                                    Description of Service
                                </TableHeaderCellLong>
                                <TableHeaderCell>
                                    Quantity
                                </TableHeaderCell>
                                <TableHeaderCell>
                                    Rate Per
                                </TableHeaderCell>
                                <TableHeaderCell>
                                    Discount
                                </TableHeaderCell>
                                <TableHeaderCell>
                                    Amount
                                </TableHeaderCell>
                            </TableHeader>
                            {
                                this.props.data.items.map((item) =>(
                                    <TableRow>
                                        <TableCellLong>
                                            {item.name}
                                        </TableCellLong>
                                        <TableCell>
                                            {item.quantity}
                                        </TableCell>
                                        <TableCell>
                                            $ {item.ratePer.toFixed(2).toString()}
                                        </TableCell>
                                        <TableCell>
                                            $ {item.discount.toFixed(2).toString()}
                                        </TableCell>
                                        <TableCell>
                                            $ {item.amount.toFixed(2).toString()}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </Table>
                        <FlexHorizontal>
                            <FlexVertical style={{flexBasis:'40vw'}}></FlexVertical>
                            <FlexVertical style={{flexBasis:'23vw', flexGrow:'1'}}>
                                <FinalLabelText>
                                    Total amount
                                </FinalLabelText>
                                <FinalLabelText>
                                    Payment method
                                </FinalLabelText>
                            </FlexVertical>
                            <FlexVertical style={{flexBasis:'25vw',alignItems:'end', flexGrow:'1'}}>
                                <FinalValueText>
                                    $ {this.props.data.total.toFixed(2).toString()}
                                </FinalValueText>
                                <FinalValueText>
                                    {this.props.data.paymentMethod}
                                </FinalValueText>
                            </FlexVertical>
                        </FlexHorizontal>
                    </FlexVertical>
                    <DeclarationFooter>
                        <DeclarationTitleText>Declaration</DeclarationTitleText>
                        <DeclarationContentText>We Declare That This Invoice Shows That Actual Price Of Services and All Particulars are True And Correct</DeclarationContentText>
                    </DeclarationFooter>
                </Page>
            </Document>
        );
    }
}

export default InvoicePdf;