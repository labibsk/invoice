import styled from '@react-pdf/styled-components'
import { Font } from '@react-pdf/renderer'

Font.register({family:'Montserrat', src:'https://ismail-creatvt.github.io/invoicegen/fonts/Montserrat-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal'})
Font.register({family:'Montserrat', src:'https://ismail-creatvt.github.io/invoicegen/fonts/Montserrat-Medium.ttf', fontStyle: 'normal', fontWeight: 'medium'})
Font.register({family:'Montserrat', src:'https://ismail-creatvt.github.io/invoicegen/fonts/Montserrat-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold'})

export const LabelText = styled.Text`
        font-family:'Montserrat';
        font-size:12pt;
        color:#e0e0e0;
        font-weight:bold;
`

export const CompanyName = styled.Text`
        color:#232323;
        font-family:'Montserrat';
        font-size:14pt;
        font-weight:bold;
        margin-left:15pt;
`
export const InvoiceTitle = styled.Text`
        color:#232323;
        font-family:'Montserrat';
        font-size:18pt;
        font-weight:bold;
        flex-grow:1;
        margin-top:4pt;
`

export const CompanyAddress = styled.Text`
        color:#232323;
        font-family:'Montserrat';
        font-size:12pt;
        font-weight:normal;
        margin-left:15pt;
`
export const ValueText = styled.Text`
        color:#fff;
        font-family:'Montserrat';
        font-size:16pt;
        font-weight:bold;
        margin-top:4pt;
`

export const InvoiceTotalText = styled.Text`
        color:#fff;
        font-family:'Montserrat';
        font-size:25pt;
        font-weight:bold;
        margin-top:4pt;
`

export const BilledToAddressText = styled.Text`
        width:250pt;
        color:#fff;
        font-family:'Montserrat';
        font-size:14pt;
        font-weight:bold;
        margin-top:4pt;
`

export const FinalLabelText = styled.Text`
    color:#c11e23;
    font-size:14pt;
    margin-top:12pt;
    font-family:'Montserrat';
    font-weight:bold;
`
export const FinalValueText = styled.Text`
    color:#232323;
    font-size:14pt;
    margin-left:30pt;
    margin-top:12pt;
    font-family:'Montserrat';
`

export const DeclarationTitleText = styled.Text`
        font-family:'Montserrat';
        font-size:10pt;
        color:#777;
        font-weight:bold;
`

export const DeclarationContentText = styled.Text`
        font-family:'Montserrat';
        font-size:12pt;
        color:#777;
`