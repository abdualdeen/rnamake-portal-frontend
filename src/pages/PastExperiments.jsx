import React, { useEffect, useState } from 'react';
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import ContentCopyIcon from '@mui/icons-material/ContentCopy';
//import Paper from '@mui/material/Paper';
import corner_swoosh from '../graphics/corner_swoosh.svg'

//function createData(name, application, user, creationTime, status, actions) {
//  return {name, application, user, creationTime, status, actions};
//}

//const rows = [
//  createData('Clone of Design RNA Scaffold on May 25, 2021 4:11 PM', "Design RNA Scaffold", "default-admin", "3 days ago", "Canceling", "Clone"),
//  createData('Clone of Design RNA Scaffold on May 25, 2021 4:12 PM', "Design RNA Scaffold", "default-admin", "3 days ago", "Creating", "Clone"),
//  createData('Design RNA Scaffold on May 25, 2021 4:11 PM', "Design RNA Scaffold", "default-admin", "3 days ago", "Failed", "Clone"),
//  createData('Clone of Design RNA Scaffold on Apr 30, 2021 4:25 AM', "Design RNA Scaffold", "default-admin", "3 days ago", "Created", "Clone"),
//  createData('Clone of Clone of Clone of Design RNA Scaffold on Apr 30, 2021 4:25 AM', "Design RNA Scaffold", "default-admin", "3 days ago", "Created", "Clone"),
//];

function BasicTable() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("localhost:8000/api/experiment-search/")
    .then(res => res.json())
    .then(
      (result)=> {
        setIsLoaded(true);
        setItems(result);
      },
      (error) =>{
        setIsLoaded(true);
        setError(error);
      }
    )
  },[])

  if(error)
  {
    return <div> Errpr: {error.message}</div>;
  }
  else if (!isLoaded)
  {
    return <div>Loading...</div>;
  }
  else
  {
    return (
      <ul>
        {items.map(item=> (
          <li key={item.experimentId}>{item.creationTime} {item.name}</li>
        ))}
      </ul>
    )
  }
  
}

function PastExperiments() {
    return (
        <div className="past-experiments">
            <div className="container">
                <div>
                    <h1 className="font-weight-light">Past Experiments</h1>
                    <BasicTable></BasicTable>
                </div>
            </div>
            <br></br>
            <img src={corner_swoosh} alt="" width='100%'/>
        </div>
    );
}

export default PastExperiments;
