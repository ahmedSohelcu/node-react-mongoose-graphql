import React, {useEffect } from 'react';
import { useSelector,useState } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './../../App.css'
import axios from 'axios'

import googleLogo_3 from './../../assets/images/oauth2/google_3.png'
import github_2 from './../../assets/images/oauth2/github_2.png'

const Login = ()=>{
  //Login with google
  const googleLogin = ()=>{
    window.open('http://localhost:5000/auth/google','_self');
  }

  //Logn with github
  const githubLogin = ()=>{
    window.open('http://localhost:5000/auth/github','_self');    
  }

  useEffect(()=>{
    //
  },[])

  return(
    <div>
      <br/>
      <h2>Welcom to oAuth2 Login </h2> 
        <p>Login to modify Invoice information</p>
      {/* <hr/> */}
        <ul className="auth_2_logo">
          <li>
          <Link>
              <img onClick={googleLogin} className="google_logo" src={googleLogo_3} alt="" />
            </Link>
          </li>
          
          <li>
            <Link onClick={githubLogin}>
              <img className="github_logo" src={github_2} alt="" />
            </Link>
          </li>

        </ul>
    </div>
  );
}

export default Login;