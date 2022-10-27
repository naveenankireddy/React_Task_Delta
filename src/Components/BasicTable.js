import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable(props) {
  return (
    <TableContainer sx={{ maxWidth: 970,maxHeight:800 }} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 380 }} aria-label="simple table">
        <TableHead position ="sticky">
          <TableRow>
            <TableCell  >Symbol</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Underlying&nbsp;Asset</TableCell>
            <TableCell align="right">Mark&nbsp;Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.symbol}
              </TableCell>
              <TableCell align="right">{item.description}</TableCell>

              <TableCell align="right">{item.underlying_asset.symbol }</TableCell>
              {/* <TableCell align="right">{item. }</TableCell> */}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
