import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#EAEAEA',
      color: '#C11E29',
    },
    body: {
      fontSize: 14
    },
  }))(TableCell);

export default StyledTableCell