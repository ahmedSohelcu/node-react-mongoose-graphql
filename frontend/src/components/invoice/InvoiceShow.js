import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import './invoice.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { getAuthDataAction } from './../../redux/actions/auth.actions';

export default function InvoiceShow() {
  const dispatch = useDispatch();
//   const todos = useSelector(state => state.getAllTodos); 
// const auth = useSelector(state => state.auth);
const [userData,setUserData] = useState(null);

useEffect(() => {
  dispatch(getAuthDataAction());
  // axios.get("http://localhost:5000/getuser",{withCredentials:true})
  // .then((res)=>{
  //   if(res.data){
  //     console.log(res);
  //     setUserData(res.data)
  //   }
  // }).catch(error=>{
  //   console.log(error);
  // });

  
}, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <div class="col-md-12  bg-white">
        <div className="invoice_wrapper offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
          <div className="card">
            
          <div className="text-right float-right">
            <Link className="btn btn-success btn-sm" to="/">Back to Invoice Lists</Link> &nbsp;
          </div>

            <div className="card-header p-4">
              <h3>Invoice</h3>
              <a className="pt-2 d-inline-block" href="index.html" data-abc="true">BBBootstrap.com</a>
              <div className="float-right">
                <h3 className="mb-0">Invoice #BBB10234</h3>
                Date: 12 Jun,2019
              </div>
            </div>

            <div className="card-body">
              <div className="row mb-4">
                <div className="col-sm-6">
                  <h5 className="mb-3">From:</h5>
                  <h3 className="text-dark mb-1">Tejinder Singh</h3>
                  <div>29, Singla Street</div>
                  <div>Sikeston,New Delhi 110034</div>
                  <div>Email: contact@bbbootstrap.com</div>
                  <div>Phone: +91 9897 989 989</div>
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
                    <tr>
                      <td className="center">1</td>
                      <td className="left strong">Iphone 10X</td>
                      <td className="left">Iphone 10X with headphone</td>
                      <td className="right">$1500</td>
                      <td className="center">10</td>
                      <td className="right">$15,000</td>
                    </tr>
                    <tr>
                      <td className="center">2</td>
                      <td className="left">Iphone 8X</td>
                      <td className="left">Iphone 8X with extended warranty</td>
                      <td className="right">$1200</td>
                      <td className="center">10</td>
                      <td className="right">$12,000</td>
                    </tr>
                    <tr>
                      <td className="center">3</td>
                      <td className="left">Samsung 4C</td>
                      <td className="left">Samsung 4C with extended warranty</td>
                      <td className="right">$800</td>
                      <td className="center">10</td>
                      <td className="right">$8000</td>
                    </tr>
                    <tr>
                      <td className="center">4</td>
                      <td className="left">Google Pixel</td>
                      <td className="left">Google prime with Amazon prime membership</td>
                      <td className="right">$500</td>
                      <td className="center">10</td>
                      <td className="right">$5000</td>
                    </tr>
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
                        <td className="right">$28,809,00</td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong className="text-dark">Discount (20%)</strong>
                        </td>
                        <td className="right">$5,761,00</td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong className="text-dark">VAT (10%)</strong>
                        </td>
                        <td className="right">$2,304,00</td>
                      </tr>
                      <tr>
                        <td className="left">
                          <strong className="text-dark">Total</strong> </td>
                        <td className="right">
                          <strong className="text-dark">$20,744,00</strong>
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
    //     </div>
    //   </div>
    //   <br/><hr/>
    // </div>
  )
}
