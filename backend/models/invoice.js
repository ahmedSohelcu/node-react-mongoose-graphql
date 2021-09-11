import mongoose from 'mongoose';

const invoiceSchema = mongoose.Schema({
  invoiceNo:{
    type:String,
    require:true,
  },
  orderNo:{
    type:String,
    require:true,
  }, 
  shipping:{
    type:Number,
    require:false,
  },
  customerId:{
    type:mongoose.Types.ObjectId,
    ref:"Customer"
  },

  invoiceItems:[
    {
      type:mongoose.Types.ObjectId,
      ref:"InvoiceItem"
    }
  ]

});

export default mongoose.model("Invoice",invoiceSchema);