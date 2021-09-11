import mongoose from 'mongoose';

const invoiceItemsSchema = mongoose.Schema({
  productName:{
    type:String,
    require:true
  },

  unitPrice:{
    type:Number,
    require:true
  },

  invoiceId:{
    type:mongoose.Types.ObjectId,
    ref:"Invoice"
  }, 

  totalQuantity:{
    type:Number,
    require:true
  },




});

export default mongoose.model("InvoiceItem",invoiceItemsSchema);