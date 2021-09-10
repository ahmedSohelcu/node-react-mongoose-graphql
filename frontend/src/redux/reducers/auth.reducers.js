import {
  FETCH_AUTH_DATA_REQUEST,
  FETCH_AUTH_DATA_SUCCESS,
  FETCH_AUTH_DATA_ERROR
} from '../types';



//--------------------------------------------
//FETCH AUTH USER Reducer
//--------------------------------------------
const initState = {
  loading:false,
  error:'',
  errors:[],
  message:'',
  user:{},
  loggedIn:false,
}

export const getAuthDataReducer = (state=initState,action)=>{    
  switch(action.type){
    case FETCH_AUTH_DATA_REQUEST:
      return {
        ...state,
        loading:true,
      }

    case FETCH_AUTH_DATA_SUCCESS:
      return {
        ...state,
        loading:false,
        user:action.payload,
        loggedIn:true,
        // status:action.payload.status,
      }

    case FETCH_AUTH_DATA_ERROR:
      return {
        ...state,
        loading:false,
        errors:action.payload,
      }

    default:
      return {
        ...state
      }
  }
}
