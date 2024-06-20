import asyncHandler from 'express-async-handler';
// @desc Auth user Token
//  route POST /api/user/auth
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Auth User" })
})

export { authUser }


