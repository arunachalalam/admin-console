import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Kitchen from './components/Kitchen';
import Sidemenu from './components/Sidemenu';
import Customers from './components/Customers';
import Orders from './components/Orders';
import Innermenu from './components/Innermenu';
import Signup from './components/Signup';








function App() {
  return (
    <div>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/Topmenu" component={Kitchen} /> 
      <Route path="/Sidemenu" component={Sidemenu} /> 
        <Route path="/Dashboard" component={Dashboard} /> 
        <Route path="/Kitchen" component={Kitchen} /> 
        <Route path="/Customers" component={Customers} /> 
        <Route path="/Orders" component={Orders} /> 
        <Route path="/Innermenu" component={Innermenu} /> 
        <Route path="/Signup" component={Signup} /> 
      
  
       
      </Router>
    </div>
  );
}

export default App;
