import asyncHandler from 'express-async-handler';
import UserModel from '../model/userModel.js'
import generateToken from '../utils/generateToken.js';

// @desc Auth user Token
// route POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else {
        res.status(400);
        throw new Error('Invalid Email or password')
    }
})


// @desc Auth user Token
// route POST /api/user/auth
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExist = await UserModel.findOne({ email })
    if (userExist) {
        res.status(400);
        throw new Error('User already exists!')
    }

    const user = await UserModel.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }
    else {
        res.status(400);
        throw new Error('Invalid user data')
    }
})


// @desc Register a new user
// route POST /api/user/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: "User Logout" })
})

// @desc Get user Profile
// route PUT /api/user/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
    res.status(200).json(user)
})

// @desc Get user Profile
// route PUT /api/user/profile
// @access Private
// const updateUserProfile = asyncHandler(async (req, res) => {
//     const user = await UserModel.findById(req.user._id);

//     if (user) {
//       user.name = req.body.name || user.name;
//       user.email = req.body.email || user.email;
  
//       if (req.body.password) {
//         user.password = req.body.password;
//       }
  
//       const updatedUser = await user.save();
  
//       res.json({
//         _id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//       });
//     } else {
//       res.status(404);
//       throw new Error('User not found');
//     }
// })
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await UserModel.findById(req.user._id);
  
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
  
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();

      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      })
  
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });

export {
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    authUser
}


