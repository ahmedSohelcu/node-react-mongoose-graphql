import React from 'react'
import { useState,useEffect } from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
import { Redirect, Router, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css'
import { getAuthDataAction } from './../../redux/actions/auth.actions';

// import UserInfoComponent from './UserInfoComponent'

export default function Index() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() => {    
    console.log('from dashboard component')
    // dispatch(getAuthDataAction());
    
  }, []); 

  
  const {loading,loggedIn,user} = useSelector(state=>state.auth);


  return(
    <>
      {
       !user ? <CircleToBlockLoading/> : user ? 
        <>
           <div className="container mx-auto bd-white row"> 
           <br/><br/>
        <div className="col-md-5 mx-auto">
          <div className="card">
            <div className="card-header">
              Dashboard              
            </div>
            <div className="profile_picture">              
               {/* { user && user.photos.length > 0 ? <img src={user.photos[0].value} /> : '' }  */}
            </div>
            
            
            {user ? JSON.stringify(user) : '' }

            <ul className="list-group list-group-flush">              
              <li className="list-group-item"><strong>Name : </strong>{user && user.displayName}</li> 
              <li className="list-group-item"><strong>User ID : </strong>{user && user.id}</li> 
              <li className="list-group-item"><strong>Given Name : </strong> {user && user.name.givenName} </li>
              <li className="list-group-item"><strong>Family Name : </strong> {user && user.name.familyName} </li>                            
              <li className="list-group-item"><strong>Email : </strong>sf dsfs f dfs sf s</li>
              <li className="list-group-item"><strong>Email Verified: </strong>ds fsfdsfsd fdsfsf s</li>
              
              {/* <li className="list-group-item"><strong>Photos : </strong> {user && user.photos ? user.photos[0].value : ''} </li>    */}
            </ul>
          </div>
        </div>         
      </div>




        </> 
         : 'please login first' 
       }
    </>    
  ); 
}