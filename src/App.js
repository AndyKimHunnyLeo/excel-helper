import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Columns from './Columns';
import readXlsxFile from 'read-excel-file';
import { makeStyles } from '@material-ui/core';
import Rows from './Rows';
import Select from '@material-ui/core/Select';
import './App.css';

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  column: { backgroundColor: '#bdc3c7' },
  input_container: {
    width: '30%',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '3%',
  },
  table_container: { width: '90%', marginTop: '2%' },
  input_button: { fontSize: 'calc(0.4vw + 10px)' },
  selector: { fontSize: 'calc(0.4vw + 10px)' },
}));

function App() {
  const classes = useStyles();
  const [table, setTable] = useState([]);
  const [columnSelector, setColumnSelector] = useState();

  function read_excel() {
    const input = document.getElementById('input');

    readXlsxFile(input.files[0]).then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.
      setTable(rows);
    });
  }

  function create_table() {
    return (
      <Table size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow className={classes.column}>
            {table[0].length > 0 &&
              table[0].map((i, index) => <Columns value={i} key={index} />)}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row, index) => {
            if (index !== 0) {
              return (
                <Rows row={row} key={index} columnIndex={columnSelector} />
              );
            }
          })}
        </TableBody>
      </Table>
    );
  }

  return (
    <div className={classes.body}>
      <div className={classes.input_container}>
        <input
          type='file'
          size='600'
          id='input'
          onChange={read_excel}
          className={classes.input_button}
        />
        <Select
          native
          value={columnSelector}
          onChange={(e) => setColumnSelector(e.target.value)}
          className={classes.selector}>
          {table.length > 0 &&
            table[0].map((row, index) => (
              <option value={index} key={index}>
                {row}
              </option>
            ))}
        </Select>
      </div>
      <div className={classes.table_container}>
        {table.length > 0 && create_table()}
      </div>
    </div>
  );
}

export default App;
