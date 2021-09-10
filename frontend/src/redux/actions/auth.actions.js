import {
  FETCH_AUTH_DATA_REQUEST,
  FETCH_AUTH_DATA_SUCCESS,
  FETCH_AUTH_DATA_ERROR
} from '../types';

// import axios from './../../helpers/axiosInstance'
import axios from 'axios'

//-----------------------------------------------------------
//get all users lists
//-----------------------------------------------------------
export const getAuthDataAction = ()=>{
  return async dispatch =>{
    try {
      dispatch({
        type:'FETCH_AUTH_DATA_REQUEST'
      });

      const res = await axios.get("http://localhost:5000/getuser",{withCredentials:true});
      // console.log('from actin res',res)

      if(res.status === 200){   
        dispatch({
          type:'FETCH_AUTH_DATA_SUCCESS',
          payload:res.data,
        });
      }
      else{
        console.log('log out failed');
      }

    } catch (error) {
      dispatch({
        type:'FETCH_AUTH_DATA_ERROR',      
        payload: {
          // errors : error.response && error.response.data
          errors : error.response
        },
      });
    }
  }
}

