const {UserRocket} = require('../models/index');

class UserRocketController {
    static async getAll(req, res, next) {
        try {
            const userRocket = await UserRocket.findAll();
            res.status(200).json(userRocket);
        } catch (error) {
            next(error);
        }
    }

    static async add(req, res, next) {
        try {
            const newComment = {
                UserId: req.body.UserId,
                RocketId: req.body.RocketId,
                comment: req.body.comment
            }
            console.log(newComment);
            const addComment = await UserRocket.create(newComment)
            res.status(201).json(addComment)
        } catch (error) {   
            next(error);
        }
    }
}

module.exports = UserRocketController;