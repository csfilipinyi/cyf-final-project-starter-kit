const jwt = require("jsonwebtoken");


module.exports = async (req, res, next) => {
    try {
        const jwtToken =await req.header("token")
        if (!jwtToken) {
            return res.status(403).json("not authorized");
        }
         console.log("verify endpoint has been hit");
        const payload = jwt.verify(jwtToken, process.env.jwtSecret);
        console.log(payload);
        req.user = payload.user;
        next();
        console.log(req.user);
       
    }
    catch (err) {
        console.log(err.message)
        return res.status(403).json("not authorized");
    }
}
    
