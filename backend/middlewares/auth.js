const jwt = require('jsonwebtoken');

const isValidToken = async (req, res, next) => {
// check if authentication header exists
  if(req.headers.authorization)
  {
    try {
    // const token = req.header('token');
    const token = req.headers.authorization.split(" ")[1]; //get the token

    if (!token) {
        return res.status(401).json({
            status: false,
            msg: "Unauthorized! Please login",
          });
    } else {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // console.log('decode', decode)
        req["AuthenticateUser"] = decode;
        next();
    }
        
    } catch (error) {
        return res.status(401).json({
            status: false,
            msg: "Unauthorized! Please login",
        });
    }
  }
  else
  {
    return res.status(401).json({
      status: false,
      msg: "Unauthorized! Please login",
    });
  }
};

module.exports = {
    isValidToken
};