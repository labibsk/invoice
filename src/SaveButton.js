import { Fab } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const SaveButton = withStyles((theme) => ({
    root: {
        background: theme.palette.success.main,
        color:'#fff',
        '&:hover':{
            background: theme.palette.success.hover,
            color:'#fff'
        }
    },
}))(Fab);

export default SaveButton