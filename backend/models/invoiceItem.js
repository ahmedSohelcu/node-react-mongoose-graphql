import mongoose from 'mongoose';

const invoiceItemsSchema = mongoose.Schema({
  invoice:{
    type:mongoose.Types.ObjectId,
    ref:"Invoice"
  }, 

  productName:{
    type:String,
    require:true
  },

  unitPrice:{
    type:Number,
    require:true
  },

  unitQuantity:{
    type:Number,
    require:true
  },

  totalQuantity:{
    type:Number,
    require:true
  },




});

export default mongoose.model("InvoiceItem",invoiceItemsSchema);