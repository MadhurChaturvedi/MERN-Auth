
// @desc Auth user Token
//  route POST /api/user/auth
const authUser = (req, res) => {
    res.status(200).json({ message: "Auth User" })
}

export {authUser}


