import logo from './logo.svg';
import React, { Component, useEffect,useState }  from 'react';
import {Redirect, Route,Switch} from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'


import {connect, useDispatch, useSelector } from 'react-redux'
import Nav from './components/Nav';
import Login from './containers/login/Login'
import InvoiceLists from './components/invoice/InvoiceLists'
import Invoice from './components/invoice/InvoiceShow'
import EditInvoice from './components/invoice/EditInvoice'
import Dashboard from './components/Dashboard/Index'
import axios from 'axios'
import PrivateRoute from './HOC/PrivateRoute';
import './App.css';
import "animate.css"



//apollo client setup
const client = new ApolloClient({
  uli:'http://localhost:5000/graphql'
});


function App() {
  const dispatch = useDispatch();
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Nav/>          
          <div className="minHeight content_wrapper">
            
            {/* router is set on index.js */}
            <Switch>
              {/* <PrivateRoute exact path="/" component={Home}> */}

              <Route exact path="/editInvoice">
                <EditInvoice />
              </Route>

              {/* <Route exact path="/invoice_lists"> */}
              <Route exact path="/">
                <InvoiceLists />
              </Route>

              <Route exact path="/dashboard">
                <Dashboard />
              </Route>     

              <Route exact path="/login">
                <Login />
              </Route>              

              <PrivateRoute exact path="/invoice">
                <Invoice />
              </PrivateRoute>
            </Switch>
          </div>
      </div>
    </ApolloProvider>      
  );
}

export default App;


