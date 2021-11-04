import * as React from 'react';
import Typography from '@mui/material/Typography';
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

// eslint-disable-next-line no-unused-vars
const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const col1 = [
  { name: 'Experiment Name', detail: 'Example Name' },
  { name: 'Description', detail: 'Testkejwlsdjflskjdfl' },
  { name: 'PDB File', detail: 'examplepdb.pdb' },
  { name: 'Start Base Pair', detail: 'A141-A162' },
  { name: 'End Base Pair', detail: 'A225-A261' },
];

const col2 = [
  { name: 'Number of Designs', detail: '10' },
  { name: 'Number of Sequences', detail: '3' },
  { name: 'Time Limit', detail: '60 minutes' },
  { name: 'Other Arguments', detail: '--search_type mc --motif_path...' },
]
export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review
      </Typography>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
        <Grid container>
            {col1.map((col1) => (
              <React.Fragment key={col1.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom align="left">{col1.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom align="left">{col1.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Grid container>
            {col2.map((col2) => (
              <React.Fragment key={col2.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom align="left">{col2.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom align="left">{col2.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}