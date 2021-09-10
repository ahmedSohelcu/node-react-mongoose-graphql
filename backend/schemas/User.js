import mongoose from 'mongoose';

//or 
// const Schema = mongoose.Schema;
// const eventSchema = new Schema({});

const userSchema = mongoose.Schema({
  
  googleId:{
    type:String,
    required:false,
  },
  githubId:{
    type:String,
    required:false,
  },
  username: {
      type: String,
      required: false,
  }
});

export default mongoose.model("User",userSchema);