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

//==============================================
//Define Type..
//==============================================

//---------------------------------------------  
  //Customer Type....done...
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
    userId:{
      type:GraphQLString
    }, 
    // invoices:{
    //   type:new GraphQLList(InvoiceType),      
    //   resolve(parent,args){
    //     //database query here....
    //   }
    // },
    user:{
      type:UserType,
      resolve(parent,args){
        return User.findById(parent.userId)
      }      
    },

    invoices:{
      type:new GraphQLList(InvoiceType),      
      resolve(parent,args){
        return Invoice.find({customerId:parent.id})
      }
    }
  })
});


//---------------------------------------------  
  //User Type.... //done 
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
    customers:{
      type:new GraphQLList(CustomerType),      
      resolve(parent,args){
        return Customer.find({userId:parent.id})
      }
    },    
    
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
    invoiceNo:{
      type:GraphQLString
    },
    orderNo:{
      type:GraphQLString
    },
    shipping:{
      type:GraphQLInt
    },    
    customerId:{
      type:GraphQLString
    }, 
    invoiceItems:{
      type:new GraphQLList(InvoiceItemType),      
      resolve(parent,args){
        return InvoiceItem.find({invoiceId:parent.id})
      }
    },   
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
    invoiceId:{
      type:GraphQLString
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
    // unitQuantity:{
    //   type:GraphQLInt
    // },
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

//===========================================================
//Users.....
//===========================================================    
    //------------------------------
    //all users..
    //------------------------------
    users:{
      type:new GraphQLList(UserType),
      resolve(parent,args){
        return User.find({});
      }
    },     
    //------------------------------
    //get single  users..
    //------------------------------
    user:{
      type:UserType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        return User.findById(args.id);
      },
    }, 

//===========================================================
//Customers.....
//===========================================================
    //------------------------------
    //all customers.
    //------------------------------
    customers:{
      type:new GraphQLList(CustomerType),
      resolve(parent,args){
        return Customer.find({});
      }
    }, 
        
    //------------------------------
    //get single  customer..
    //------------------------------
    customer:{
      type:CustomerType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        return Customer.findById(args.id);
      }
    }, 


    //------------------------------
    //all invoices.
    //------------------------------
    invoices:{
      type:new GraphQLList(InvoiceType),
      resolve(parent,args){
        return Invoice.find({});
      }
    }, 
    //------------------------------
    //single invoices.
    //------------------------------
    invoice:{
      type:InvoiceType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        return Invoice.findById(args.id);
      }
    },
 
    //------------------------------
    //all invoices items
    //------------------------------
    invoiceItems:{
      type:new GraphQLList(InvoiceItemType),
      resolve(parent,args){
        return InvoiceItem.find({});
      }
    }, 

    
    //------------------------------
    //single invoices item.
    //------------------------------
    invoiceItem:{
      type:InvoiceItemType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        return InvoiceItem.findById(args.id);
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
        address:{type:GraphQLString},
        userId:{type:GraphQLString}
      },
      resolve(parent,args){
        let customer = new Customer({
          user:args.user,
          address:args.address,
          userId:args.userId
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
        customerId:{type:GraphQLID},
        invoiceNo:{type:GraphQLString},
        orderNo:{type:GraphQLString},
        shipping:{type:GraphQLInt},
        date:{type:GraphQLString},
      },
      resolve(parent,args){
        let invoice = new Invoice({
          customerId:args.customerId,
          invoiceNo:args.invoiceNo,
          orderNo:args.orderNo,
          shipping:args.shipping,
          date:args.date,
        });
        return invoice.save();
      }
    },

    //------------------------------
    //Store Invoice item
    //------------------------------
    addInvoiceItem:{
      type:InvoiceItemType,
      args:{
        invoiceId:{type:GraphQLID},
        productName:{type:GraphQLString},
        unitPrice:{type:GraphQLInt},
        totalQuantity:{type:GraphQLInt},
      },
      resolve(parent,args){
        let invoiceItem = new InvoiceItem({
          invoiceId:args.invoiceId,
          productName:args.productName,
          unitPrice:args.unitPrice,
          totalQuantity:args.totalQuantity,
        });
        return invoiceItem.save();
      }
    },


  }
});



export default new GraphQLSchema({
  query:RootQuery,
  mutation:Mutation
});

