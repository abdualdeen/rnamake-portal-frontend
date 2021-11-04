import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import BasicMenu from './BasicMenu';



export default function JobName() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Project Name/Description
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Description"
            fullWidth
            maxRows = "5"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12 }>
        <BasicMenu />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}