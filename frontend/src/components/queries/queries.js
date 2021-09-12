import React from 'react'

import {gql} from 'apollo-boost';

  const getInvoiceLists = gql`
  {
    users{
      id
      username
      googleId
      githubId
      email
      phone
      customers{
        id
        address
        userId
        invoices{
          id
          invoiceNo
          orderNo
          shipping
          customerId
          invoiceItems{
            id
            invoiceId
            productName
            unitPrice
            totalQuantity
          }        
        }      
      }
    }
  }
  `
  //613ccafa0512a8cd576ba14a
  
  const getInvoiceDetails = gql`
  query{
        invoice(id:"613e070ad3d169b60c4f044f"){
        id
        invoiceNo
        orderNo
        shipping
        customerId    
        invoiceItems {
          id
          invoiceId      
          productName
          unitPrice
          totalQuantity
        }
      }
    }
  `


  // const getInvoiceDetails = gql`query
  //    {
  //       invoice(id:$id){
  //       id
  //       invoiceNo
  //       orderNo
  //       shipping
  //       customerId    
  //       invoiceItems {
  //         id
  //         invoiceId      
  //         productName
  //         unitPrice
  //         totalQuantity
  //       }
  //     }
  //   }
  // `

  export {getInvoiceLists,getInvoiceDetails}