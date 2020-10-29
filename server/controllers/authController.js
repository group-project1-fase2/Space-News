const {User} = require('../models/index');
const {token} = require('../helpers/jwt'); 
const {comparePassword} = require('../helpers/bcrypt')

class AuthController {
    static async register(req, res, next) {
        try {
            const newUser = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                birth_date: req.body.birth_date
            }
            console.log(newUser);
            const user = await User.create(newUser);
            res.status(201).json({
                id: +user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                birth_date: user.birth_date
            });
        } catch (error) {
            next(error);
            console.log(error);
        }
    }

    static async login(req, res, next) {
        const loginUser = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const find = await User.findOne({
                where: {
                    email: loginUser.email
                }
            });
            const compare = comparePassword(loginUser.password, find.password);
            if (!find) {
                next({
                    name: "Auth failed" 
                })
            } else if (!compare) {
                next({
                    name: "Auth failed" 
                })
            } else {
                const access_token = token({
                    id: find.id,
                    email: find.email
                });
                res.status(200).json({access_token});
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;