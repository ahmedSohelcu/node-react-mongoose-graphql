import React, {useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'

// import googleLogo_1 from './assets/images/oauth2/google_1.png'
import googleLogo_1 from './../../assets/images/oauth2/google_1.png'
import googleLogo_2 from './../../assets/images/oauth2/google_2.png'
import googleLogo_3 from './../../assets/images/oauth2/google_3.png'

import github_1 from './../../assets/images/oauth2/github_1.png'
import github_2 from './../../assets/images/oauth2/github_2.png'

const Login = ()=>{
  // const history = useHistory();

  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
  } = useAuth0();

  useEffect(()=>{
    //
  },[])

  return(
    <div>
      <h2>Hello...From Loign </h2>
        <ul>
          <li>
            <img src={googleLogo_1} alt="" />

            <button onClick={loginWithPopup}>Login with  popup</button>
            <button onClick={loginWithRedirect}>Login with  redirect</button>
            <button onClick={logout}>logout</button>
          </li>
        </ul>
  
        <h3>User is {isAuthenticated ? 'LoggedIn' : 'Not Loggedin' }</h3>

    </div>
  );
}

export default Login;