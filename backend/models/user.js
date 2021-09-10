import mongoose from 'mongoose';

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
  },
  email:{
    type: String,
    required: false,
  },
  phone:{
    type: String,
    required: false,
  },
  customer:{
    type:mongoose.Types.ObjectId,
    ref:"Customer"
  },

});

export default mongoose.model("User",userSchema);