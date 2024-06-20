import asyncHandler from 'express-async-handler';

// @desc Auth user Token
// route POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Auth User" })
})


// @desc Auth user Token
// route POST /api/user/auth
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register User" })
})


// @desc Register a new user
// route POST /api/user/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout User" })
})

// @desc Get user Profile
// route PUT /api/user/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User Profile" })
})

// @desc Get user Profile
// route PUT /api/user/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update User Profile" })
})

export {
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    authUser
}


