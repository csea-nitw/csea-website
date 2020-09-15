import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Team from './Team';
import Events from './Events';
import Home from './Home';
import Alumni from './Alumni';
import { Paper } from '@material-ui/core';
const PageTabs=(props)=>
{
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          color: theme.palette.background.paper,
          fontSize: "30px"
        },
        font:
        {
          fontSize: "16px",
          fontWeight: "600",
          fontFamily: 'Space Grotesk, sans-serif' ,
          textTransform: 'none',
          color:"#141414"
        }
      }));

    const classes = useStyles();
        
    const {match ,history} =props;
    const {params}=match;
    const {page}=params;

      const tabNameToIndex ={
        "home" : 0,
        "events" :1,
        "alumni" : 2,
        "team" : 3,
      }

      const indexToTabName={
        0: "home",
        1: "events",
        2: "alumni",
        3: "team",
      }

      const [selectedTab, setSelectedTab] = React.useState(tabNameToIndex[page]);
   
  const handleChange = (event, newValue) => {
   
    history.push("/"+indexToTabName[newValue]);
    setSelectedTab(newValue); 
  };
    return (  
    <>
    {/* <Box > */}
      <AppBar elevation={0} color="transparent"  className={classes.root} position="static">
        <Tabs  centered value= {selectedTab} onChange={handleChange} >
          
          <Tab className={classes.font} label="Home"  />
          <Tab className={classes.font} label="Events" />
          <Tab className={classes.font} label="Alumni" />
          <Tab className={classes.font} label="Team" />
        
        </Tabs>
      </AppBar>

       {selectedTab===0 && <Home/>}
       {selectedTab===1 && <Events/>}
       {selectedTab ===2 && <Alumni/>}
       {selectedTab===3 && <Team/>}
       {selectedTab==undefined && <h1>xfgdfgdfhgfhgfjghjkhjkjkljkjkljhjghkgh</h1>}
       {/* </Box> */}
    </>
    
   
    );
};
export default PageTabs;