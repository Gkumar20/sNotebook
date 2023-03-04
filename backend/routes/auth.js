const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

//json web tool used for secret communication between client and server :- create token
const jwtSecret = "Secret$Client&Server"

// create a user using : POST at "/api/auth/createuser" no login require
router.post('/createuser',[

  //here chekcing  of email name and password is valid or not 
  body('name',"Enter Valid Name").isLength({ min: 3 }),
  body('email',"Enter valid Email").isEmail(),
  // password must be at least 5 chars long min:5
  body('password',"pasword must be greater than 5 character").isLength({ min: 5 }),
  ], 
  
  async (req, res) => {
    console.log(req.body)

    //validator check the validation of email name and password
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check whether user email is unique on not means USER exist already or not 
      let user=await User.findOne({email:req.body.email})
      console.log(user)
      if(user){
        return res.status(400).json({error:"this email is already registered"})
      }

      //generate salt and addition of bcrypt to secure password 
      const salt = await bcrypt.genSaltSync(10) ; // generate 10 bit hash password
      const securePass = await bcrypt.hash(req.body.password,salt);

      // create  new user 
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass
      })

      // send response in json file after creating user & creating token for client
      const data= {
        user:{
          id:user.id
        }
      }
      const ClientToken = jwt.sign(data, jwtSecret);
      res.json({ClientToken})  

    } catch (error) {
      // console.error(error.message)
      // error send as a response at status 500
      res.status(500).send(error.message)
    }
  })
  module.exports=router