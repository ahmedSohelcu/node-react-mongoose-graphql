import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title:{
    type:String,
    require:true
  },

  description:{
    type:String,
    require:false
  },

  price:{
    type:Number,
    require:false
  },

  date:{
    type: String,
    require:false
  }

});

//export in es6
export default mongoose.model('Event', eventSchema);


