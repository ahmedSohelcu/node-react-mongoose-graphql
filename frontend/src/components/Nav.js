import React, {Component,Fragment,useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import '../App.css'
// import Api from '../apis/Api'
import { useHistory } from "react-router-dom";
import { CircleToBlockLoading } from 'react-loadingg';
import { getAuthDataAction } from './../redux/actions/auth.actions';
import axios from 'axios'


function Nav(){  
  const dispatch = useDispatch();

  useEffect(()=>{
    // dispatch(getAuthDataAction());

    // axios.get('http://localhost:5000/isLoggedIn')
    // .then(response=>{
    //   console.log('isLoggedIn');
    //   console.log(response);
    // })
    // .catch(error=>{
    //   console.log('isLoggedIn');
    //   console.log(error.response);
    // })


  });

  const {error,errors,loading,loggedIn,message,user} = useSelector(state=>state.auth);

  //-------------------------------
  //logout user
  //-------------------------------
  const logout = async  ()=>{   
    await axios.get('http://localhost:5000/auth/logout',{withCredentials:true})
    .then(response=>{
      if(response.status ==='success'){
          window.location ='/';
      }
    })
    .catch(error=>{
      console.log(error.response);
    })



  }

  const renderLoggedInLinks = ()=>{
    return (                   
        <> 
          <li>           
            <Link className="btn btn-success nav-item nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>       
          <li>           
            <Link className="btn btn-success nav-item nav-link" onClick={logout}>
              Logout
            </Link>
          </li>         
        </>
    );
  }

  

  // Links which are accessable before login
  const renderNotLoggedInLinks = ()=>{
    return (                        
        <>             
          <li>     
            <Link className="btn btn-success nav-item nav-link" to="/login">
              Login 0Auth2
            </Link>
          </li>
        </>
    );
  }

  return (
      <>
       {/* {loading ? <CircleToBlockLoading/> : ( */}
         <div className="navItemWrapper">   
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">              
              <p>{user && user.displayName} </p> &nbsp;
              <p>{user && user.id ? ' ID-': ''} {user && user.id}</p>  
              
              <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">  
                <li>     
                  {/* <Link className="btn btn-success nav-item nav-link" to="/invoice_lists"> */}
                  <Link className="btn btn-success nav-item nav-link" to="/">
                    Invoice Lists
                  </Link>
                </li>    
                {/* <li>     
                  <Link className="btn btn-success nav-item nav-link" to="/invoice">
                    Invoice
                  </Link>
                </li> */}

                {              
                  user ? renderLoggedInLinks() : renderNotLoggedInLinks()
                }
               </ul>
             </div>
           </div>
         </nav>   
       </div>
       {/* )}       */}
      </>
    );
}

export default Nav;