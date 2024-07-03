
import jwt from "jsonwebtoken"
const isAuthenticate=async(req,res,next)=>{
    try {
        const token=req.cookies.token
        // console.log(token);
        if(!token){
            return res.status(401).json({message:"user not Authenticate"})
        }
        const decode=await jwt.verify(token,process.env.JWT_SECRET_KEY)
        // console.log(decode);
        if(!decode){
            return res.status(401).json({
                message:"invaild token"
            })
        }
        // req.id me jo token me tokenData hai usme user _id store hai usse data do req.id me
        req.id=decode.userId
        next();
    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticate