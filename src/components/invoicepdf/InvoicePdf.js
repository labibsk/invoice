import React, {Component} from 'react'
import {Document, Page, Image } from '@react-pdf/renderer'
import logo from '../../assets/edigital_wolf_logo.png'
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
                <Page style={{margin:'0px', paddingBottom:'0pt', paddingTop:'0pt', paddingLeft:'0pt', paddingRight:'0pt'}}>
                    <FlexVertical style={{ width:'100vw'}}>
                        <FlexHorizontal style={{padding:'20pt'}}>
                            <Image src={logo} style={{width:'60pt', height:'47pt'}}/>
                            <FlexVertical>
                                <CompanyName style={{marginTop:'8pt'}}>EDigital Wolf</CompanyName>
                                <CompanyAddress style={{marginTop:'8pt', width:'350pt'}}>
                                    12840 Pennybridge Dr Bridgeton
                                </CompanyAddress>
                                <CompanyAddress>
                                    Missouri, California
                                </CompanyAddress>
                                <CompanyAddress>
                                   United States,63044
                                </CompanyAddress>
                            </FlexVertical>
                            <FlexVertical style={{flexGrow:'1' , alignItems:'end'}}>
                                <InvoiceTitle>Invoice</InvoiceTitle>
                            </FlexVertical>
                        </FlexHorizontal>
                        <InvoiceHeader>
                            <FlexVertical style={{flexBasis:'70vw'}}>
                                <LabelText>
                                    Billed To
                                </LabelText>
                                <ValueText>
                                    {this.props.data.customerName}
                                </ValueText>
                                <BilledToAddressText>
                                    {this.props.data.customerAddress}
                                </BilledToAddressText>
                                <BilledToAddressText>
                                    {this.props.data.customerCityState}
                                </BilledToAddressText>
                                <BilledToAddressText>
                                    {this.props.data.customerCountryZipCode}
                                </BilledToAddressText>
                                <FlexHorizontal style={{marginTop:'16pt'}}>
                                    <FlexVertical style={{marginRight:'20pt'}}>
                                    <LabelText>
                                        Invoice No.
                                    </LabelText>
                                    <ValueText>
                                        {this.props.data.invoiceNo.toString()}
                                        </ValueText>
                                    </FlexVertical>
                                    <FlexVertical style={{marginRight:'20pt'}}>
                                        <LabelText>
                                            Issue Date
                                        </LabelText>
                                        <ValueText>
                                            {format(this.props.data.issueDate, "dd/MM/yyyy")}
                                        </ValueText>
                                    </FlexVertical>
                                    <FlexVertical style={{marginRight:'20pt'}}>
                                        <LabelText>
                                            Due Date
                                        </LabelText>
                                        <ValueText>
                                            {format(this.props.data.dueDate, "dd/MM/yyyy")}
                                        </ValueText>
                                    </FlexVertical>
                                </FlexHorizontal>
                            </FlexVertical>

                            <FlexVertical style={{alignItems:'end', flexGrow:1}}>
                                <LabelText>
                                    Invoice Total
                                </LabelText>
                                <InvoiceTotalText>
                                    {this.props.data.currency} {this.props.data.total.toFixed(2).toString()}
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
                                    <TableRow key={item.id}>
                                        <TableCellLong>
                                            {item.name}
                                        </TableCellLong>
                                        <TableCell>
                                            {item.quantity}
                                        </TableCell>
                                        <TableCell>
                                            {this.props.data.currency} {item.ratePer.toFixed(2).toString()}
                                        </TableCell>
                                        <TableCell>
                                            {this.props.data.currency} {item.discount.toFixed(2).toString()}
                                        </TableCell>
                                        <TableCell>
                                            {this.props.data.currency} {item.amount.toFixed(2).toString()}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </Table>
                        <FlexHorizontal style={{width:'100vw'}}>
                            <FlexVertical style={{flexBasis:'50vw', alignItems:'end', flexGrow:'1'}}>
                                <FinalLabelText>
                                    Total amount
                                </FinalLabelText>
                                <FinalLabelText>
                                    Payment method
                                </FinalLabelText>
                            </FlexVertical>
                            <FlexVertical style={{flexBasis:'15vw', alignItems:'end', flexGrow:'1', alignSelf:'right', paddingRight:'15ft'}}>
                                <FinalValueText>
                                    {this.props.data.currency} {this.props.data.total.toFixed(2).toString()}
                                </FinalValueText>
                                <FinalValueText>
                                    {this.props.data.paymentMethod}
                                </FinalValueText>
                            </FlexVertical>
                        </FlexHorizontal>
                        <DeclarationFooter>
                            <DeclarationTitleText>Declaration</DeclarationTitleText>
                            <DeclarationContentText>We Declare That This Invoice Shows That Actual Price Of Services and All Particulars are True And Correct</DeclarationContentText>
                        </DeclarationFooter>
                    </FlexVertical>
                </Page>
            </Document>
        );
    }
}

export default InvoicePdf;
