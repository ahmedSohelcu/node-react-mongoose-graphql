import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";

export default function Invoice(props) {
  const history = useHistory();
  
  const {error,errors,loading,loggedIn,message,user} = useSelector(state=>state.auth);

  const viewInvoice = (invoiceId)=>{
    history.push(`/invoice/${invoiceId}`);
  }

  return (
    <>
      <tr>
        <td>{props.index+1}</td>
        <td className="text-left" width="20%">{props.user?.username ? props.user?.username : '' }</td>
        <td>{props.user?.email ? props.user.email : '' }</td>
        <td>{props.user?.phone ? props.user.phone : ''} </td>
                  
          {
             props.user.customers ? props.user.customers.map(customer=>
              customer.invoices ? customer.invoices.map(invoice=>(
                <>
                <td>{invoice.invoiceNo}</td>
                <td>                  
                  {
                    user ? (
                    <>
                        <Link className="btn btn-success btn-sm" title="View Details" onClick={()=>viewInvoice(invoice.id)}>Details</Link> &nbsp;
                        <Link className="btn btn-warning btn-sm" to="/editInvoice" value={invoice.id} title="Edit Invoice">Edit/Mutate </Link>
                    </> 
                    ) : 
                    <>
                      
                      <Link className="btn btn-success btn-sm" title="View Details" onClick={()=>viewInvoice(invoice.id)}>Details</Link> &nbsp;
                      {/* <Link className="btn btn-warning btn-sm" to="/editInvoice" value={invoice.id} title="Edit Invoice">Edit/Mutate </Link> */}
                    </>
                  }
                  
                </td>
                </>
              )) : ''
             ) : '' }
      </tr>
    </>
  )
}