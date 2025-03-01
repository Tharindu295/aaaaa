import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModels.js';

export const register = async (req,res)=>{

    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:"Missing Detai"
        })
        

    }

    try {

        const exsitingUser = await userModel.findOne({email}) 

        const hashedpassword = await bcrypt.hash(password,10);
        
    } catch (error) {

        res.json({success:false, message:error.message})
        
    }
}