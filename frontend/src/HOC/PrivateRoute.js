import React, { useEffect } from 'react'
import { Redirect, Route,useHistory } from 'react-router-dom'
import { getAuthDataAction } from './../redux/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';

const PrivateRoute = ({component:Component, ...rest})=>{
  
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {    
    console.log('private route.js component')
    dispatch(getAuthDataAction());
  }, []);
  
  const {error,errors,loading,loggedIn,message,user} = useSelector(state=>state.auth);

  console.log('from priva', user)

  return <Route {...rest} component={ (props)=>{    
    if(loggedIn === true){
      return <Component {...props}/>
    }else{
      return <Redirect to={`/`} />
      // history.push('/');
    }
  }} />
}

export default PrivateRoute;