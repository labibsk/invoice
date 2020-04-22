import React from 'react';
import { Box, Card } from '@material-ui/core';
import Header from './components/header/Header';
import InvoiceHeader from './components/invoiceheader/InvoiceHeader';
import ItemTable from './components/itemtable/ItemTable';
import InvoiceSummary from './components/invoicesummary/InvoiceSummary';
import Declaration from './components/declaration/Declaration'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import classes from 'classes';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import SaveButton from './SaveButton'
import AlertDialog from './components/alertdialog/AlertDialog';
import WarningSnackbar from './components/warningsnackbar/WarningSnackbar';
import './App.css';
import DownloadDialog from './components/downloaddialog/DownloadDialog'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      invoiceNo:Math.floor(new Date().getTime()/20000.0),
      total:0,
      customerName:'',
      customerAddress:'',
      customerCityState:'',
      customerCountryZipCode:'',
      message:'',
      negativeAction:'',
      positiveAction:'',
      open:false,
      actionId:-1,
      id:-1,
      items:[],
      issueDate:new Date(),
      dueDate:new Date(),
      erroropen:false,
      error:'',
      paymentMethod:'',
      downloadopen:false
    }
  }

  handleNegative(){
    this.close()
  }

  close(){
    this.setState({ ...this.state, id:-1, open:false, message:'', actionId:-1, negativeAction:'', positiveAction:''})
  }

  handlePositive(){
    switch(this.state.actionId){
      case 1:
        const items = this.state.items.filter((value, index, arr)=>{
          return value.id !== this.state.id; 
        });
        this.setState({...this.state, items:items, id:-1, open:false, message:'', actionId:-1, negativeAction:'', positiveAction:''});
        break;
      default:
        break;
    }
  }
  
  saveToPdf(){
    if(this.state.customerName.length < 3){
      this.setState({...this.state, erroropen:true, error:'Please enter name'})
      return;
    }
    
    if(this.state.customerAddress.length < 3){
      this.setState({...this.state, erroropen:true, error:'Please enter address'})
      return;
    }

    if(this.state.items.length === 0){
      this.setState({...this.state, erroropen:true, error:'Please add items'})
      return;
    }

    this.state.items.forEach(item => {  
      if(item.name.length < 3){
        this.setState({...this.state, erroropen:true, error:'Please enter item name'})
        return;
      }
    })
    
    if(this.state.paymentMethod.length === 0){
      this.setState({...this.state, erroropen:true, error:'Please enter payment method'})
      return;
    }
    this.setState({...this.state, downloadopen:true})
  }

  addItem(){
    const items = this.state.items.slice();
    items.push({ id: new Date().getTime(), name:"", quantity:1, ratePer: 0.0, discount:0.0, amount: 0.0 });
    this.setState({...this.state, items:items});
  }

  onDelete(id){
    this.setState({ ...this.state, id: id, open:true, message:'Do you wan\'t to delete this item?', actionId:1, negativeAction:'No', positiveAction:'Yes'})
  }

  onIssueDateChange(date){
    this.setState({...this.state, issueDate:date});
  }

  onDueDateChange(date){
    this.setState({...this.state, dueDate:date});
  }

  onErrorClose(){
    this.setState({...this.state, error:'', erroropen:false })
  }

  onNameChanged(event){
    this.setState({...this.state, customerName:event.target.value})
  }

  onAddressChanged(event){
    this.setState({...this.state, customerAddress:event.target.value})
  }
  
  onCityStateChanged(event){
    this.setState({...this.state, customerCityState:event.target.value})
  }
  
  onCountryZipCodeChanged(event){
    this.setState({...this.state, customerCountryZipCode:event.target.value})
  }

  onUpdateName(id, itemName){
    this.setState({...this.state, items:this.state.items.map(item=>{
      return item.id === id ? {...item, name:itemName} : item
    })})
  }

  onUpdateDiscount(id, discount){
    const items = this.state.items.map(item=>{
      return item.id === id ? {...item, discount:discount, amount:(item.quantity*item.ratePer) - discount} : item
    });
    let total = this.calculateTotal(items);
    this.setState({...this.state, items:items, total:total})
  }

  onUpdateRatePer(id, ratePer){
    const items = this.state.items.map(item=>{
      return item.id === id ? {...item, ratePer:ratePer, amount:(item.quantity*ratePer) - item.discount} : item
    });
    let total = this.calculateTotal(items);
    this.setState({...this.state, items:items, total:total})
  }

  calculateTotal(items){
    var total = 0;
    items.forEach((item)=>{
      total += item.amount
    })
    return total
  }

  onUpdateQuantity(id, quantity){
    const items = this.state.items.map(item=>{
      return item.id === id ? {...item, quantity:quantity, amount:(quantity*item.ratePer)- item.discount} : item
    });
    let total = this.calculateTotal(items);
    this.setState({...this.state, items:items, total:total})
  }

  onPaymentMethodChange(event){
    this.setState({...this.state, paymentMethod:event.target.value});
  }

  handleDownloadClose(){
    this.setState({...this.state, downloadopen:false})
  }

  render(){
    return (
      <div className="App">
        <Box className="saveButtonContainer">
          <SaveButton className="saveButton" variant="extended" onClick={()=>this.saveToPdf()}>
            <PictureAsPdfIcon className={classes.extendedIcon} style={{marginRight:'10px'}}/> Save To Pdf
          </SaveButton>
        </Box>

        <Card className="invoiceCard">
          <Header className="header"/>
          <InvoiceHeader 
                  className="invoiceHeader"
                  onIssueDateChange={(date)=>this.onIssueDateChange(date)} 
                  onDueDateChange={(date)=>this.onDueDateChange(date)} 
                  total={this.state.total}
                  invoiceNo={this.state.invoiceNo}
                  issueDate={this.state.issueDate}
                  dueDate={this.state.dueDate}
                  name={this.state.customerName}
                  address={this.state.customerAddress}
                  countryZipCode={this.state.customerCountryZipCode}
                  onCountryZipCodeChanged={this.onCountryZipCodeChanged.bind(this)}
                  cityState={this.state.customerCityState}
                  onCityStateChanged={this.onCityStateChanged.bind(this)}
                  onNameChanged={this.onNameChanged.bind(this)}
                  onAddressChanged={this.onAddressChanged.bind(this)}/>
          <ItemTable 
                  items={this.state.items} 
                  onDelete={(id)=>this.onDelete(id)}
                  onUpdateName={(id, name)=>this.onUpdateName(id, name)}
                  onUpdateQuantity={(id, quantity)=>this.onUpdateQuantity(id, quantity)}
                  onUpdateRatePer={(id, ratePer)=>this.onUpdateRatePer(id, ratePer)}
                  onUpdateDiscount={(id, discount)=>this.onUpdateDiscount(id, discount)}/>
          <Box>
            <Fab className="addButton" variant="extended"
              color="primary" style={{ margin:'24px'}} onClick={()=>this.addItem()}>
              <AddIcon className={classes.extendedIcon} style={{marginRight:'10px'}} /> Add Item
            </Fab>
          </Box>
          <InvoiceSummary 
            className="invoiceSummary"
            total={this.state.total}
            paymentMethod={this.state.paymentMethod}
            onPaymentMethodChange={(event)=>this.onPaymentMethodChange(event)}/>
          <Declaration />
        </Card>
        <AlertDialog 
          message={this.state.message} 
          open={this.state.open} 
          positiveAction={this.state.positiveAction}
          negativeAction={this.state.negativeAction}
          handleNegative={()=>this.handleNegative()}
          handlePositive={()=>this.handlePositive()}/>
        <WarningSnackbar open={this.state.erroropen} error={this.state.error} onErrorClose={this.onErrorClose.bind(this)}/>
        <DownloadDialog
          open={this.state.downloadopen}
          data={this.state}
          handleNegative={()=>this.handleDownloadClose()}/>
      </div>
    );
  }
}

export default App;
