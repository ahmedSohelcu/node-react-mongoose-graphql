import React from 'react'
 import { useState, useEffect } from 'react';

export default function InvoiceItem(props) {

  return (
    <>
      <tr>
        <td className="center">{props.index+1}</td>
        <td className="center">{props.data.productName}</td>
        <td className="left">Iphone 10X with headphone</td>   
        <td className="center">{props.data.totalQuantity}</td>
        <td className="right">{props.data.unitPrice}</td>
        <td className="right">{props.data.unitPrice * props.data.totalQuantity }</td>
      </tr>
    </>
  )
}


