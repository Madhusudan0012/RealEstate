// import express from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const register =  async (req, res)=>{
    //db operations 
    // console.log(req.body);
    const {username , email , password} = req.body;

    //Hash Password 
    //Create new USer and save info 
    const hasedPassword = await bcrypt.hash(password , 10);
    console.log(hasedPassword);


    const newUser = await prisma.user.create({
        data:{
            username, 
            email, 
            password : hasedPassword,

        }, 
    })
    console.log(newUser);

}
export const login =  (req, res)=>{
    //db operations 

}
export const logout =  (req, res)=>{
    //db operations 
}
