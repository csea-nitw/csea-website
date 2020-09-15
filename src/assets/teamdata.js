import React from 'react';

import { Grid, Box } from '@material-ui/core';
import pratik from './pratik1.jpg';
import pratik2 from './pratik.jpg';


const DummyTeamGridItems=(props)=>
{
    return (
        <>
        <Grid item xs={12} sm={6} md={3} lg={2} >
<ProfileUi imgUrl={pratik} name='Pratik Prakash' designation='Add. Secretary' />
</Grid>
<Grid item xs={12} sm={6} md={3} lg={2} >
<ProfileUi imgUrl={pratik2} name='Pratik Prakash' designation='Add. Secretary' />
</Grid>
<Grid item xs={12} sm={6} md={3} lg={2} >
<ProfileUi imgUrl={pratik} name='Pratik Prakash' designation='Add. Secretary' />
</Grid>
<Grid item xs={12} sm={6} md={3} lg={2} >
<ProfileUi imgUrl={pratik2} name='Pratik Prakash' designation='Add. Secretary' />
</Grid>
<Grid item xs={12} sm={6} md={3} lg={2}>
<ProfileUi imgUrl={pratik} name='Pratik Prakash' designation='Add. Secretary' />
</Grid>
<Grid item xs={12} sm={6} md={3} lg={2}>
<ProfileUi imgUrl={pratik2} name='Pratik Prakash' designation='Add. Secretary' />
</Grid>
  </>
    );
};
export default DummyTeamGridItems;