import React from 'react'
import { useState,useEffect } from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
import { Redirect, Router, useHistory, Link } from 'react-router-dom';
import '../../App.css'
import {useAuth0} from '@auth0/auth0-react'


export default function Index() {
  const history = useHistory();
  // const [user,setUser] = useState({});
  const [isLoading,setIsLoading] = useState(false);

  const {user} = useAuth0();
  const {name,email,email_verified,family_name,given_name,local,nickname,picture,sub,updated_at} = user;

  // const [name,setName] = useState(false);
  // const [email,setEmail] = useState(false);
  // const [email_verified,setEmail_verified] = useState(false);
  // const [famaly_name,setFamaly_name] = useState(false);
  // const [given_name,setGiven_name] = useState(false);
  // const [local,setLocal] = useState(false);
  // const [nickname,setNickname] = useState(false);
  // const [picture,setPicture] = useState(false);
  // const [sub,setSub] = useState(false);
  // const [updated_at,setUpdated_at] = useState(false);

  useEffect(()=>{
    // const body = localStorage.getItem("@@auth0spajs@@::zje5jKGET2KMhHL9hJVPK8VYAnuiMos9::default::openid profile email offline_access");
    // alert(body);
    // if(!user){
      // console.log('user',user)
      // const user = useAuth0();
      // history.push('/')
      // alert('....')
    // }
  },[]) 



  // if(user.length > 0){
  //   const {name,email,email_verified,famaly_name,given_name,local,nickname,picture,sub,updated_at} = user;
  //   setName(name);
  //   setEmail(email);
  //   setEmail_verified(email_verified);
  //   setFamaly_name(famaly_name);
  //   setGiven_name(given_name);
  //   setLocal(local);
  //   setNickname(nickname);
  //   setPicture(picture);
  //   setSub(sub);
  //   setUpdated_at(updated_at);
  // }


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
    <hr/>
       {user ? (

      <div className="container mx-auto bd-white row"> 
        {/* {user ? JSON.stringify(user) : ''} */}
        <div className="col-md-5 mx-auto">
          <div className="card">
            <div className="card-header">
              Dashboard              
            </div>
            <div className="profile_picture">
                <img src={picture}/>
            </div>
            <ul className="list-group list-group-flush">              
              <li className="list-group-item"><strong>Name : </strong> {name ? name : '--' }</li> 
              <li className="list-group-item"><strong>Given Name : </strong> {given_name ? given_name : '--' }</li>
              <li className="list-group-item"><strong>Family Name : </strong> {family_name ? family_name : '--' }</li>
              <li className="list-group-item"><strong>Nick Name : </strong> {nickname ? nickname : '--' }</li>
              <li className="list-group-item"><strong>Email : </strong>{email ? email : '--' }</li>
              <li className="list-group-item"><strong>Email Verified: </strong>{email_verified && email_verified === true ? "Yes" : "NO" }</li>
            </ul>
          </div>
        </div>         
      </div>    
        )  : 'Loading....'
      }
    </>
  )
  
}