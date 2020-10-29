const {verify} = require('../helpers/jwt');
const {User} = require('../models/index');

 async function authentication(req, res, next){
    const token = req.headers.token;
    try {
        if (!token) {
            res.status(401).json({
                msg: 'Auth failed'
            })
        } else {
            const decoded = verify(token);
            const user = await User.findOne({
                where: {
                    email: decoded.email
                }
            })
            if (!user) {
                res.status(401).json({
                    msg: 'Auth failed'
                })
            } else {
                req.userHasLogin = decoded;
                if (req.userHasLogin) {
                    next();
                }
            }
        }   
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = authentication