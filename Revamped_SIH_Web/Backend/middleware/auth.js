import jwt from "jsonwebtoken";
export const SECRET = 'SEcr3t';

export const authenticatejwt = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err,user)=>{
            if(err){
                console.error("JWT Verification Error:", err.message);
                return res.status(403).json({message: "Invalid Token "});
            }
            req.user = user;
            next();
        })
    }else{
        res.sendStatus(401);
    }
};