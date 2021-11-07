
//import * as React from 'react';
import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {useDropzone} from 'react-dropzone';
import dragNDropBox from '../Graphics/dragNDropBox.png';
import styled from 'styled-components';


export default function PDBSettings() {

  const [cloudUpload, setCloudUpload] = useState(0);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        PDB file and Base Pairs
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <input
            accept="*"
            //className={className.input}
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
          {/* This implementation of the drag'n'drop feature is jank. I'll fix it later after the page works properly. */}
          <FlexRow>
            <span>
              Submission requires a PDB containing RNA &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <br></br>
              that has at least 2 basepair ends &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
              <MyDropline></MyDropline>
          </FlexRow>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button onClick={() => {setCloudUpload(1)}}>
            Click me
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {returnCloudStorage(cloudUpload)}
        </Grid>
        <Grid item xs={12} md={6}>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function returnCloudStorage(props)
{
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  if(props)
  {
    return(
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
  else
  {
    return;
  }
}

function MyDropline() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    return acceptedFiles;
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <img src = {dragNDropBox}/>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p></p> :
          <p></p>
      }
    </div>
  )
}

const FlexRow = styled.div`
margin-top: 83px;
margin-left: 135px;
display: flex;
align-items: flex-start;
min-width: 996px;
`;