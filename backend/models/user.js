
import mongoose from 'mongoose';
// const bcrypt=require('bcrypt')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    
  },
  email: {
    type:String,
    required:true,
    unique:true
    
  },
  password: {
    type:String,
    required:true,
    
  }
},{timestamps:true});
// userSchema.pre('save',async function (next) {
//   if(!this.isModified('password'))return next()
//     this.password= await bcrypt.hash(this.password,10)
//   next()
  
// })
const User = mongoose.model('User', userSchema);
export default User;


