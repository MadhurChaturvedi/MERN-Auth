import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import UserModel from '../model/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
    if (token) {
        try {
            const decode = jwt.verify(token, process.env.JWT_Secret)
            req.user = await UserModel.findById(decode.userId).select('-password');
            next()
        }
        catch (error) {
            res.status(401)
            throw new Error('not authorized , invalid token')
        }
    } else {
        res.status(401)
        throw new Error('not authorized , no token')
    }
})

export { protect }