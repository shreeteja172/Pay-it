const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) =>{
    const authheader = req.headers.authorization
    if(!authheader || !authheader.startsWith('Bearer ')){
        return res.status(403).json({
            message: "Invalid token Authorisation"
        });
    }
    const token = authheader.split(' ')[1]
    

    try {
        const decoded = jwt.verify(token,JWT_SECRET)
        // console.log("decoded",decoded)
        req.userid = decoded.userId
        next()
    } catch (error) {
        return res.status(403).json({
            message: "Invalid Error"
        });
    }
    
}

module.exports = {
    authMiddleware
}
