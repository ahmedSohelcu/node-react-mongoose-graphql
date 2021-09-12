import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import './invoice.css'
import axios from 'axios'
import { getAuthDataAction } from './../../redux/actions/auth.actions';
import { useLocation } from 'react-router-dom'
import InvoiceItem from './InvoiceItem';

import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

import {  
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import {getInvoiceDetails} from '../queries/queries'

function InvoiceShow(props) {
  // Get ID from URL
  const {invoiceId} = useParams();

  const dispatch = useDispatch();
  const [userData,setUserData] = useState(null);

  const [total,setTotal] = useState(0);
  const [subtotal,setSubtotal] = useState(0);

  useEffect(()=>{
    // alert(invoiceId)//123
  },[]);

  const data = props.data;

  return (
    data.loading ? <div>Loading Invoices...</div> : (

    <div className="animate__animated animate__fadeIn">

      {
        // data ? JSON.stringify(data) : ''
      }
      <div class="col-md-12  bg-white">
        <div className="invoice_wrapper offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
          <div className="card">
            
          <div className="text-right float-right">
            <Link className="btn btn-success btn-sm" to="/">Back to Invoice Lists</Link> &nbsp;
          </div>

            <div className="card-header p-4">
              <h3>Invoice</h3>
              <div className="float-right">
                <h3 className="mb-0">Invoice no #{data.invoice.invoiceNo}</h3>                
                <p className="mb-0">Order no {data.invoice.orderNo}</p>                
                Date: 12 Jun,2019
              </div>
            </div>

            <div className="card-body">
              <div className="row mb-4">
                <div className="col-sm-6">
                  <h5 className="mb-1">From:</h5>
                  <h3 className="text-dark mb-1">Gain Solutions Ltd</h3>
                  <div> Avenue -11, Road-11, Mirpur DOHS 1182 </div>
                  <div>Dhaka, Dhaka 1216, BD </div>
                  <div>Email: gain@emails.homerun.com</div>
                  <div>Phone: +00 1111 222 55</div>
                </div>

                <div className="col-sm-6 ">
                  <h5 className="mb-3">To:</h5>
                  <h3 className="text-dark mb-1">Akshay Singh</h3>
                  <div>478, Nai Sadak</div>
                  <div>Chandni chowk, New delhi, 110006</div>
                  <div>Email: info@tikon.com</div>
                  <div>Phone: +91 9895 398 009</div>
                </div>
              </div>

              <div className="table-responsive-sm">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="center">#</th>
                      <th>Item</th>
                      <th>Description</th>
                      <th className="right">Price</th>
                      <th className="center">Qty</th>
                      <th className="right">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* show invoice items... */}
                    {
                      data.invoice.invoiceItems ? data.invoice.invoiceItems.map((invoiceItem,index)=>
                        <InvoiceItem  index={index} data={invoiceItem} />): ''
                    }
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-3 offset-5">
                </div>
                <div className="col-lg-4 col-sm-5 ml-auto">
                  <table className="table table-clear">
                    <tbody>
                      <tr>
                        <td className="left">
                          <strong className="text-dark">Subtotal</strong>
                        </td>
                        <td className="right">{subtotal}</td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong className="text-dark">Shipping (+)</strong>
                        </td>
                        <td className="right">{data.invoice.shipping}</td>
                      </tr>                      
                    
                      <tr>
                        <td className="left">
                          <strong className="text-dark">Total</strong> </td>
                        <td className="right">
                          <strong className="text-dark">{total}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white">
              <p className="mb-0">ahmedsohelcu@gmail.com,Hathazari,Chittaoing,Bangladesh</p>
            </div>
          </div>
        </div>              
      </div>        
    </div>        
  )
  )
}

export default graphql(getInvoiceDetails)(InvoiceShow);

// export default graphql(getInvoiceDetails,{
//   options:(invoiceId)=>{
//     return {
//       variables:{
//         id: invoiceId
//       }
//     }
//   }
// })(InvoiceShow);

