/* eslint-disable react/display-name */
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    row: { background: (props) => (props.odd ? '#effefe' : '#fff') },
}));

function Columns({ value, odd }) {
    const classes = useStyles({ odd });
    return (
        <TableCell className={classes.text} style={{ maxWidth: 65, wordBreak: 'break-all' }}>
            {value}
        </TableCell>
    );
}
export default Columns;
