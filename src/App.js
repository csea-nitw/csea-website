import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import PageTabs from './PageTabs'; 

function App() {
  return (
    <>
      <Switch>
      
      <Redirect exact from="/" to = "/home"/>

      <Route 
        exact 
        path="/:page?" 
        render={(props)=><PageTabs {...props}/>}
      />
   
      {/* "/:" remember "/" is always NECESSARY before ":"
      <Route 
        exact 
        path="/:page" 
        render={(props)=>< {...props}/>}
        />    */}
      {/*use render when you want to pass props with params,history etc to a component*/}
    </Switch>
    </>
  );
}

export default App;
