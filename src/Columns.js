/* eslint-disable react/display-name */
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    row: { background: (props) => (props.odd ? '#effefe' : '#fff') },
}));

function Columns({ value, odd }) {
    const classes = useStyles({ odd });
    let column_name
    if (value.length > 6) {
        column_name = value.slice(0, 6) + "...";
    } else {
        column_name = value
    }
    return (
        <TableCell className={classes.text} style={{ minWidth: "20", maxWidth: "50", wordBreak: 'break-all' }}>
            {column_name}
        </TableCell>
    );
}
export default Columns;
