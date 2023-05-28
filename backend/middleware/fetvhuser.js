var jwt = require('jsonwebtoken');

const fetchuser = (req,res,next) => {
    //get user from the jwt token and add id to req obj
    const token = req.header('auth-token');
    if (!token) {
        res.status().send();
    }
}

module.exports = fetchuser;