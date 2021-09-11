import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
  address:{
    type:String,
    require:false,
  },
  userId:{
    type:mongoose.Types.ObjectId,
    require:true,
  },
  // user:{
  //   type:mongoose.Types.ObjectId,
  //   ref:"User"
  // },
  // invoices:[
  //   {
  //     type:mongoose.Types.ObjectId,
  //     ref:"Invoice"
  //   }
  // ]

});

export default mongoose.model("Customer",customerSchema);


//todo.finde.find().populate("user").select('')



