import jwt from 'jsonwebtoken';
import getParameter from "../utils/getParameters.js";

const jwt_secret = getParameter('JWT_SECRET');
const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({message:'Unauthorized'});
    }
    const token = authorization.split(' ')[1]+"";
    try {
        const decoded =  jwt.verify(token, jwt_secret);
        req.user = decoded;
        req.token = token;
        next();
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
export default requireAuth;
