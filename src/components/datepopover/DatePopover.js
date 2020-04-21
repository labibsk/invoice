
import React from 'react';
import Popover from '@material-ui/core/Popover';
import { DatePicker,MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class DatePopover extends React.Component {

  render() {

    return (
      <div>
        <Popover
          id="simple-popper"
          open={this.props.open}
          anchorEl={this.props.anchor}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    autoOk
                    variant="static"
                    openTo="date"
                    onClose={this.props.onDateClose}
                    value={this.props.date}
                    onChange={this.props.onDateChange}
                />
            </MuiPickersUtilsProvider>
        </Popover>
      </div>
    );
  }
}

export default DatePopover;