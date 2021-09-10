import graphql from 'graphql'
import User from '../models/user';
import Customer from '../models/customer';
import Invoice from '../models/invoice';
import InvoiceItem from '../models/invoiceItem';


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  } = graphql;

  const users = [
    {id:'223212', name:'Ahmed'}
  ];


//==============================================
//Define Type..
//==============================================

//---------------------------------------------  
  //User Type....
//----------------------------------------------  
const UserType = new GraphQLObjectType({
  name: 'User',
  fields:()=>({
    id:{
      type:GraphQLID
    },
    googleId:{
      type:GraphQLString
    },
    githubId:{
      type:GraphQLString
    },
    username:{
      type:GraphQLString
    },
    email:{
      type:GraphQLString
    },
    phone:{
      type:GraphQLString
    },
    customer:{
      type:CustomerType,
      resolve(parent,args){
        //database query here....
      }      
    }
  })
});

//---------------------------------------------  
  //Customer Type....
//----------------------------------------------  
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields:()=>({
    id:{
      type:GraphQLID
    },
    address:{
      type:GraphQLString
    },    
    invoices:{
      type:new GraphQLList(InvoiceType),      
      resolve(parent,args){
        //database query here....
      }
    },
    user:{
      type:UserType,
      resolve(parent,args){
        //database query here....
      }      
    }
  })
});


//---------------------------------------------  
//Invoice Type....
//----------------------------------------------  
const InvoiceType = new GraphQLObjectType({
  name: 'Invoice',
  fields:()=>({
    id:{
      type:GraphQLID
    },
    customer:{
      type:CustomerType,
      resolve(parent,args){
        //database query here....
      }      
    },
    invoiceNo:{
      type:GraphQLString
    },
    orderNo:{
      type:GraphQLString
    },
    shipping:{
      type:GraphQLInt
    },
    invoiceItems:{
      type:new GraphQLList(InvoiceItemType),      
      resolve(parent,args){
        //database query here....
      }
    }
  })
});


//--------------------------------------------- 
  //Invoice Item Type....
//----------------------------------------------
const InvoiceItemType = new GraphQLObjectType({
  name: 'InvoiceItem',
  fields:()=>({
    id:{
      type:GraphQLID
    },
    invoice:{
      type:InvoiceType,
      resolve(parent,args){
        //database query here....
      }      
    },
    productName:{
      type:GraphQLString
    },
    unitPrice:{
      type:GraphQLInt
    },
    unitQuantity:{
      type:GraphQLInt
    },
    totalQuantity:{
      type:GraphQLInt
    },
  })
});


//==============================================
//RootQuery ...start
//==============================================
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    //users..
    users:{
      type:new GraphQLList(UserType),
      resolve(parent,args){
        //return data form database query here....
        return users;
      }
    }, 

    invoice:{
      type:InvoiceType,
      args:{id:{type:GraphQLID}},

      resolve(parent,args){
        //database query here....
      }
    },

  }
});

//==============================================
//Mutation...start
//==============================================
const Mutation = new GraphQLObjectType({
  name : 'Mutation',
  fields:{
    //------------------------------
    //Store User 
    //------------------------------
    addUser:{
      type:UserType,
      args:{
        googleId:{type:GraphQLString},
        githubId:{type:GraphQLString},
        username:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString},
      },
      resolve(parent,args){
        let user = new User({
          googleId:args.googleId,
          githubId:args.githubId,
          username:args.username,
          email:args.email,
          phone:args.phone,
        });
        return user.save();
      }
    },
    
    //------------------------------
    //Store Customer 
    //------------------------------
    addCustomer:{
      type:CustomerType,
      args:{
        user:{type:GraphQLID},
        address:{type:GraphQLString}
      },
      resolve(parent,args){
        let customer = new Customer({
          user:args.user,
          address:args.address
        });
        return customer.save();
      }
    },    
    //------------------------------
    //Store Invoice 
    //------------------------------
    addInvoice:{
      type:InvoiceType,
      args:{
        // customer:{type:GraphQLID},
        invoiceNo:{type:GraphQLString},
        orderNo:{type:GraphQLString},
        // shipping:{type:GraphQLInt},
        // date:{type:GraphQLString},
      },
      resolve(parent,args){
        let invoice = new Invoice({
          // customer:args.customer,
          invoiceNo:args.invoiceNo,
          orderNo:args.orderNo,
          // shipping:args.shipping,
          // date:args.date,
        });
        return invoice.save();
      }
    },

  }
});



export default new GraphQLSchema({
  query:RootQuery,
  mutation:Mutation
});

