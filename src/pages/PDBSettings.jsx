
//import * as React from 'react';
import React, { useState, /*useCallback*/ } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FileExplorer from '../components/FileExplorer'
//import {useDropzone} from 'react-dropzone';
//import dragNDropBox from '../Graphics/dragNDropBox.png';
//import styled from 'styled-components';

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
<label htmlFor="raised-button-file">
  <Button variant="raised" component="span" >
    Upload
  </Button>
  </label> 
          {/* This implementation of the drag'n'drop feature is jank. I'll fix it later after the page works properly. */}
         {/* <FlexRow>
            <span>
              Submission requires a PDB containing RNA &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <br></br>
              that has at least 2 basepair ends &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </span>
              <MyDropline></MyDropline>
          </FlexRow>
         */}
        </Grid>
        <Grid item xs={12} md={6}>
        <Button onClick={() => {cloudUpload ? setCloudUpload(0): setCloudUpload(1)}}>
            Cloud Upload
          </Button>
        </Grid>
        <Grid item xs={12}>
          <FileExplorer cloudUpload={cloudUpload} setCloudUpload={setCloudUpload} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

//function MyDropline() {
//  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
//    return acceptedFiles;
//  }, [])
//  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

//  return (
//    <div {...getRootProps()}>
//      <img src = {dragNDropBox}/>
//      <input {...getInputProps()} />
 //     {
 //       isDragActive ?
//          <p></p> :
//          <p></p>
//      }
//    </div>
//  )
//}

//const FlexRow = styled.div`
//margin-top: 83px;
//margin-left: 135px;
//display: flex;
//align-items: flex-start;
//min-width: 996px;
//`;
