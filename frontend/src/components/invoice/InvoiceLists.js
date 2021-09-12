import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { getAuthDataAction } from './../../redux/actions/auth.actions';

import {graphql} from 'react-apollo';
import Invoice from './Invoice';

import {getInvoiceLists} from '../queries/queries'

function InvoiceLists(props) {  
  const dispatch = useDispatch();
//   const protectedRoute = ()=>{
//  //
//   }
  
  useEffect(() => {    
    // dispatch(getAuthDataAction());
  }, []);

  const data = props.data;
  const {error,errors,loading,loggedIn,message,user} = useSelector(state=>state.auth);
  return (
   data.loading ? <div>Loading Invoices...</div> : (
     
    <div className="animate__animated animate__fadeIn"><hr/>      
      <div className="container-fluid px-3">
        <div classNme="row">
          <div className="col-md-10 mx-auto">
            <div class="invoice_lists_wrapper col-md-12  bg-white">  <br/>
               
              <h3>Name: {user ? user.displayName : ''}</h3> 
              <h3>ID: {user ? user.id : ''}</h3><hr/>

                {
                  // data ? JSON.stringify(data.users) : ''
                  
              }
              <h3>Invoice Lists</h3><hr/>
              <table className="table table-hover table-striped bg-white">              
                <thead>
                  <tr>
                    <th width="10%">SL</th>
                    <th className="text-left" width="20%">Customer name</th>                   
                    <th className="text-left">Email</th>                   
                    <th className="text-left" width="20%">Phone</th>
                    <th className="text-left" width="20%">Invoice No</th>
                    <th width="20%">
                      actions
                    </th>
                  </tr>
                </thead>
              <tbody>                
                {
                  data.users ? data.users.map((user,index) => 
                    <Invoice user={user} index={index} key={index} />                  
                  ): ''
                }              
              </tbody>      
              <hr/>
        </table>
            </div>
          </div>        
        </div>
      </div>
      <br/><hr/>
    </div>
    )
  )
}

export default graphql(getInvoiceLists)(InvoiceLists);
