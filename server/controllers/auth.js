
import User from '../models/user.js'
import { hashPassword ,comparePassword} from '../helpers/auth.js';
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { token } from 'morgan';
dotenv.config()
export const secretKey = 'mysecretkey';
console.log(secretKey)


export const register = async (req,res) =>{
 try{
   const {name ,email,password} =req.body;
   // Validation
   if(!name.trim()){
      return res.json({error:"Name is required"})
   }
   if(!email){
      return res.json({error:"Email is taken"})
   }
   if(!password || password.length<6){
      return res.json({error:"Passwor need 6 character atleast"})
   }

   const existingUSer =await User.findOne({email})

   if(existingUSer){
      return res.json({error:"Email is taken"})
   }
 
    const hashedPassword =  await hashPassword(password)

//   register user
const user = await new User({
   name,
   email,
   password:hashedPassword,
}).save()
//  create signew jwt

const token = jwt.sign({_id:user._id},
secretKey, {expiresIn:"10d"} );

// send response

res.json({
   user :{
      name:user.name,
      email :user.email,
      role:user.role,
      address:user.address
   },
   token,
})
   
 }catch(err){
   console.log(err)
 }
};


export const login = async (req,res) =>{
   try{
     const {email,password} =req.body;
     // Validation
     
     if(!email){
        return res.json({error:"Email is taken"})
     }
     if(!password || password.length<6){
        return res.json({error:"Password must be atleast 6 character"})
     }
  
     const user = await User.findOne({email})
  
     if(!user){
        return res.json({error:"User not found"})
     }
   // compare password
   const match = await comparePassword(password,user.password)
  if(!match){
   return res.json({error:"Wrong Password"})
  }

  
  //  create sign in jwt
 
  const token = jwt.sign({_id:user._id},secretKey, {expiresIn:"10d"} );

  // send response
  
  res.status(200).json({
  
     user :{
        name:user.name,
        email :user.email,
        role:user.role,
        address:user.address
     },
     token,
    
  })
   console.log(token)  
   }catch(err){
     console.log(err)
   }
  };




export const secret = async (req,res) => {
  
      res.json ({currentUser:req.user})
   
}
 