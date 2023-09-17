import mongoose from "mongoose";
import cors from "cors";
import {authenticatejwt, SECRET} from "./middleware/auth.js";
import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
const app = express();
import { z } from "zod";

app.use(bodyParser.json());
app.use(cors({origin : '*'}));


const adminSchema = mongoose.Schema({
    username: String,
    password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

mongoose.connect("mongodb+srv://vibgitcode27:Subzero@cluster0.eiyaeoh.mongodb.net/SIH", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let InputProps = z.object({
    username: z.string().nonempty("Field is Required").email("Invalid Email"),
    password: z.string().nonempty(),
})

app.post('/signup', async (req,res)=>{
    const parsedInput = InputProps.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(411).json({
            message: parsedInput.error,
        })
    }
    else{
        let username = parsedInput.data.username;
        let password = parsedInput.data.password;
        const admin = await Admin.findOne({username,password});
        if(admin){
            res.status(403).json({message: 'Admin already exists'});
        }
        else{
            const obj = {username:username, password: password};
            const newAdmin = new Admin(obj);
            await newAdmin.save();

            const token = jwt.sign({username, role:'admin'}, SECRET, {expiresIn: '1h'});
            res.json({message: 'Admin created successfully', token});
        }
    }})

app.get("/me", authenticatejwt, (req,res)=>{
    res.json({
        username: req.user.username,
    })
})

app.post("/login", async(req,res)=>{
    const {username, password} = req.body;
    const admin = await Admin.findOne({username,password});
    if(admin){
        const token = jwt.sign({username, role: 'admin'},SECRET, {expiresIn: '1h'});
        res.json({message: 'Logged in Successfully', token});
    }else{
        res.status(403).json({message: 'Invalid Username and Password'});
    }
})

app.listen(3000 , () => {console.log("Server is running at port 3000")});