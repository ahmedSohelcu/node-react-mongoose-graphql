import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
  user:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  },

  address:{
    type:String,
    require:false,
  },

  invoices:[
    {
      type:mongoose.Types.ObjectId,
      ref:"Invoice"
    }
  ]

});

export default mongoose.model("Customer",customerSchema);