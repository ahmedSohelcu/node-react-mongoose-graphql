import React from 'react'
import { Fragment } from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css'
import Api from '../../apis/Api'
import { Redirect, useHistory } from 'react-router-dom';
//Import Loader component
import { CircleToBlockLoading } from 'react-loadingg';
import axios from 'axios'


export default function EditInvoice() {
  const dispatch = useDispatch();
  const history = useHistory();
  //-------------------------------------------
  //initialize state
  //-------------------------------------------
  const initialState = {
    name:'',
    username:'',
    email:'',
    password:'',
    password_confirmation:'',
    details:'',
  }
  const [inputs,setInput] = useState(initialState);  

  const [loading, setLoading] =  useState(false); 
  
  //-------------------------------------------
  //reset form
  //-------------------------------------------
  const resetRegForm = ()=>{
    setInput(initialState);
  }
  
  //-------------------------------------------
  //change input
  //-------------------------------------------
  const onChangeHandler = (e)=>{
    setInput({
      ...inputs,
      [e.target.name]:e.target.value
    });
  }
  
  useEffect(() => {    
    // console.log('register .js component')
  }, []);
  
  //-------------------------------------------
  //dispatch action for registration 
  //-------------------------------------------
  const register = async (e)=>{
    e.preventDefault();
    const {name,username,email,password,password_confirmation,details} = inputs; 
 
    const data = new FormData();
    data.append('name',name);
    data.append('username',username);
    data.append('email',email);
    data.append('password',password);
    data.append('password_confirmation',password_confirmation);

    // dispatch(registerUserAction(data));
  } 


  return (
    <Fragment><hr/>
        {loading ? (<CircleToBlockLoading/>) :(
           
          <div className="container card card-body animate__animated animate__fadeIn">        
          <h2>Edit / Mutate Invoice</h2>
          {/* {     message && (<div className="text-center"><h3 className="errMsg">{ message } </h3></div> )      }                    */}
          <form onSubmit={register}>
            <div class="row">
              <div class="col-md-7">                          
                <fieldset>
                  <div className="form-group">
                    <label className="float_left form-label mt-4 float-left">Product Name</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Enter name" 
                        name="name"
                        value={inputs.name}
                        onChange={onChangeHandler}
                    />
                    {/* { errors ? <p className="errMsg">{errors && errors.name?.[0]}</p> : '' } */}
                  </div>
  
                  <div className="form-group">
                    <label className="float_left form-label mt-4 float-left">Unit Price (per pirce)</label>
                    <input type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        name="email" 
                        value={inputs.email}
                        onChange={onChangeHandler}
                    /> 
                    {/* { errors ? <p className="errMsg">{errors && errors.email?.[0]}</p> : '' } */}
                  </div>

                  <div className="form-group">
                    <label className="float_left form-label mt-4 float-left">Total Quantity</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Enter Username" 
                        name="username" 
                        value={inputs.username}
                        onChange={onChangeHandler}
                    />
                    {/* { errors ? <p className="errMsg">{errors && errors.username?.[0]}</p> : '' } */}
                  </div> 
                 
                </fieldset>          
              </div>
  
              <div class="col-md-5">            
                <fieldset>     
                  <div className="form-group">
                    <label className="float_left form-label mt-4 align-left">Description</label>
                    <textarea className="form-control" value={inputs.details} name="details"
                       onChange={onChangeHandler} rows={3}>
                      {inputs.details}
                    </textarea>
                    {/* { errors ? <p className="errMsg">{errors && errors.details?.[0]}</p> : '' } */}
                  </div>
                </fieldset>         
                <br/>
                <div className="buttonWrapper">
                    <button type="button" onClick={resetRegForm} className="form-control btn btn-danger float-right">Cancel</button>                                   
                    <button type="submit" className="form-control btn btn-success float-right">Update</button>                                       
                </div>
              </div>                                
          </div>
          </form>
          <br/><br/><br/>
        </div>    
        )    
    }

     
      <br/>
    </Fragment>
  )
}




