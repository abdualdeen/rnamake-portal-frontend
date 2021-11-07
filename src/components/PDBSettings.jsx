import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import dragNDropBox from '../Graphics/dragNDropBox.png';
import styled from 'styled-components';

function PDBSettings() {
  return (
    <React.Fragment>
      <div className='PDBSettings'>
        <FlexRow>
          <span>
            Submission requires a PDB containing RNA &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <br></br>
            that has at least 2 basepair ends &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
            <MyDropline></MyDropline>
        </FlexRow>
      </div>
    </React.Fragment>)
}

export default PDBSettings;

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
margin-left: 58px;
display: flex;
align-items: flex-start;
min-width: 996px;
`;