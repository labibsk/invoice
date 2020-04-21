import styled from '@react-pdf/styled-components'

export const Table = styled.View`
    width:100vw;
    display:flex;
    flex-direction:column;
`
export const TableHeader = styled.View`
    width:100vw;
    background:#e1e1e1;
    padding:12pt;
    display:flex;
    flex-direction:row;
`
export const TableHeaderCellLong = styled.Text`
    width:35vw;
    color:#c11e29;
    font-family:'Montserrat';
    font-size:12pt;
    font-weight:bold;
`

export const TableHeaderCell = styled.Text`
    width:15vw;
    color:#c11e29;
    font-family:'Montserrat';
    font-size:12pt;
    font-weight:bold;
    text-align:right;
`
export const TableRow = styled.View`
    width:100vw;
    background:#fefefe;
    padding:12pt;
    display:flex;
    border-bottom:1pt solid #ccc;
    flex-direction:row;
`
export const TableCellLong = styled.Text`
    width:35vw;
    color:#232323;
    font-family:'Montserrat';
    font-size:12pt;
`

export const TableCell = styled.Text`
    width:15vw;
    color:#232323;
    font-family:'Montserrat';
    font-size:12pt;
    text-align:right;
`