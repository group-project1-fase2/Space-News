const {User} = require('../models/index');
const {token} = require('../helpers/jwt'); 
const {comparePassword} = require('../helpers/bcrypt')
const {OAuth2Client} = require('google-auth-library');

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
            // console.log(newUser);
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

    static async googleLogin(req, res, next) {
        const google_access_token = req.body.google_access_token
        const client = new OAuth2Client(process.env.CLIENT_ID_GOOGLE);
        try {
            const ticket = await client.verifyIdToken({
                idToken: google_access_token,
                audience: process.env.CLIENT_ID_GOOGLE,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            const user = await User.findOne({
                where: {
                    email: payload.email
                }
            })
            // console.log(user, "ini user dr auth gogole")
            if(user) {
                const access_token = token({
                    id: user.id,
                    email: user.email
                });
                res.status(200).json(access_token)
            } else {
                const newUser = {
                    email: user.email,
                    password: "randomdulu"
                }
                const createUser = await User.create(newUser, {returning: true})
                const access_token = token({
                    id: createUser.id,
                    email: createUser.email
                });
                res.status(200).json(access_token)
            }
        } catch (error) {
            next(error)
        }
          
    }
}

module.exports = AuthController;