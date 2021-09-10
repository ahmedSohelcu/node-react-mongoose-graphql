import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { getAuthDataAction } from './../../redux/actions/auth.actions';

export default function InvoiceLists() { 
  const dispatch = useDispatch();
 
  const protectedRoute = ()=>{
  //  axios.get('http://localhost:5000/protected')
   axios.get('http://localhost:5000/')
   .then(response=>{
      console.log(response)

   }).catch(error=>{
     console.log(error)
   })
  }  
  useEffect(() => {    
    dispatch(getAuthDataAction());
  }, []);

  const {error,errors,loading,loggedIn,message,user} = useSelector(state=>state.auth);

  return (
    <div className="animate__animated animate__fadeIn"><hr/>
      {/* <h2>Welcome to Manage Todos page.</h2> <hr/> */}
      <div className="container-fluid px-3">
        <div classNme="row">
          <div className="col-md-10 mx-auto">
            <div class="invoice_lists_wrapper col-md-12  bg-white">
              <br/>
              {
                user ? 'user true ' : 'user false...'
              }
              {/* <h3>Name: {user ? user.displayName : ''}</h3>
              <h3>ID: {user ? user.id : ''}</h3><hr/> */}

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
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" onClick={protectedRoute}>Edit/Mutate</Link>

                  </td>
                </tr>                  
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" to="/editInvoice">Edit/Mutate </Link>
                  </td>
                </tr>                  
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" to="/editInvoice">Edit/Mutate </Link>
                  </td>
                </tr>                  
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" onClink={protectedRoute}>Edit/Mutate</Link>
                  </td>
                </tr>                  
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" to="/editInvoice">Edit/Mutate </Link>
                  </td>
                </tr>                  
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" to="/editInvoice">Edit/Mutate </Link>
                  </td>
                </tr>                  
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" to="/editInvoice">Edit/Mutate </Link>
                  </td>
                </tr>                  
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" to="/editInvoice">Edit/Mutate </Link>
                  </td>
                </tr>                  
                <tr>
                  <td>SL</td>
                  <td className="text-left" width="20%">Name</td>
                  <td>Details</td>
                  <td>Details</td>
                  <td>Datef</td>
                  <td>
                    <Link className="btn btn-success btn-sm" to="/invoice">Details</Link> &nbsp;
                    <Link className="btn btn-warning btn-sm" to="/editInvoice">Edit/Mutate </Link>
                  </td>
                </tr>  
                       
               {/* { todos.data ? todos.data.map(todo => <Todo key={todo.id} todos={todos} todo={todo} />) : ''  }   */}
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
}