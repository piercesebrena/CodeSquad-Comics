//Start coding here: 
const bcrypt = require("bcrypt");
const passport = require("passport")
const User = require("...models/UserModel")

const loginLocalFailed = async (request, response, next) => {
    console.log(request.user);
    res.status(401).json({
        success: { message: "User or password is incorrect." },
        statusCode: 401,
    });
}
const logoutRequest = (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return res.status(400).json({
          error: {
            message: "Something went wrong!",
            statusCode: 400
          }
        });
      }
      res.status(200).json({
        success: {
          message: "User logged out!",
          statusCode: 200
        }
      });
    });
  };
    


const register = async (request, response, next) => {
    const { username, password } = request.body;
    bcrypt.hash(password, 10, async (error, hashedPassword) => {
    if (error) {
        return next(error);
    }
    const newUser = new User({
        username: username,
        password: hashedPassword, 
    });
    await newUser.save() 

    request.login(newUser, (err) => {
    response.status(201).json({
        success: { message: "New user is created" },
        data: { username },
        statusCode: 201,
    });
    })
    });
    response.status(500).json({
        error: { message: "Internal server error." },
        statusCode: 500,
    }); 

}



    