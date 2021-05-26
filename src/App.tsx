import React from 'react';
import logo from './logo.svg';
import './App.css';
import { hostname } from 'os';
import Home from './Pages/HomePage/Home';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './Components/Header';
import AllModels from './AllModelsPage/AllModels';
import CarDetails from './CarDetailsPage/CarDetails';
import CarConfigure from './ConfigurationPage/CarConfigure'
import Error from './ErrorPage/Error'
import OrderSuccessful from './OrderPage/OrderSuccessful';



function App() {
  
  return (
    <div className="App">
      <header className="App-header" />
        
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/all-models" exact component={AllModels}/>
            <Route path="/all-models/:id" exact component={CarDetails}/> 
            <Route path="/all-models/:id/configure" exact component={CarConfigure}/>
            <Route path="/error" exact component={Error}/>
            <Route path="/all-models/:id/orderComplete" exact component={OrderSuccessful}/>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
