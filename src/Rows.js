/* eslint-disable react/display-name */
import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import 'react-toastify/dist/ReactToastify.css';
const useStyles = makeStyles((theme) => ({
    row: { background: '#fff' },
    checkedRow: { backgroundColor: '#1abc9c' }
}));


function Rows({ row, key, columnIndex = 0 }) {
    const [checked, setChecked] = useState(false);

    const classes = useStyles({ checked });


    function copyStringToClipboard(str) {
        try {
            // Create new element
            var el = document.createElement('textarea');
            // Set value (string to be copied)
            el.value = str;
            // Set non-editable to avoid focus and move outside of view
            el.setAttribute('readonly', '');
            el.style = { position: 'absolute', left: '-9999px' };
            document.body.appendChild(el);
            // Select text inside element
            el.select();
            // Copy text to clipboard
            document.execCommand('copy');
            // Remove temporary element
            document.body.removeChild(el);
        } catch (error) {
            console.log(error);
        } finally {

            setChecked(true);
        }
    }

    return (
        row.length > 0 && key !== 0 && (
            <React.Fragment>
                {checked ? (<TableRow className={classes.checkedRow}>
                    <TableCell>
                        <Button size='small'
                            width={70}
                            variant='outlined'
                            onClick={() => {
                                copyStringToClipboard(row[columnIndex]);
                            }}
                            className={classes.button}
                        >copied✓
                     </Button>
                    </TableCell>
                    {row.length > 0 && row.map((i, index) => <TableCell key={index}>{i}</TableCell>)}
                </TableRow>) : (<TableRow className={classes.row}>
                    <TableCell>
                        <Button size='small'
                            width={70}
                            variant='outlined'
                            onClick={() => {
                                copyStringToClipboard(row[columnIndex]);

                            }}
                            className={classes.button}
                        >copy
                    </Button>
                    </TableCell>
                    {row.length > 0 && row.map((i, index) => <TableCell key={index}>{i}</TableCell>)}
                </TableRow>)}
            </React.Fragment>

        )
    );
}

export default Rows;
