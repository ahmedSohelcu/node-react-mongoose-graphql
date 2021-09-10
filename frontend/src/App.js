import './App.css';
import logo from './logo.svg';
import React, { Component, useEffect,useState }  from 'react';
import {Redirect, Route,Switch} from 'react-router-dom'
import "animate.css"

import {connect, useDispatch, useSelector } from 'react-redux'

import Nav from './components/Nav';
import Login from './containers/login/Login'

import InvoiceLists from './components/invoice/InvoiceLists'
import Invoice from './components/invoice/InvoiceShow'
import EditInvoice from './components/invoice/EditInvoice'
import Dashboard from './components/Dashboard/Index'
import axios from 'axios'
import PrivateRoute from './HOC/PrivateRoute';


function App() {
  const dispatch = useDispatch();
  // // const auth = useSelector(state => state.auth);
  // const [userData,setUserData] = useState(null);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/getUser",{withCredentials:true})
  //   .then((res)=>{
  //     if(res.data){
  //       console.log(res);
  //       setUserData(res.data)
  //     }
  //   });
  // }, []);


  return (
      <div className="App">
        {/* {userData ? JSON.stringify(useuserDatarData) : '' } */}
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
  );
}

export default App;


