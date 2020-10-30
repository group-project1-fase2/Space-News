const {UserNasa, Nasa, User} = require('../models/index');

class UserNasaController {
    static async add(req, res, next){
        const addComment = {
            UserId : req.body.UserId,
            NasaId : req.body.NasaId,
            comment : req.body.comment
        }
        try {
            const comment = await UserNasa.create(addComment)
            res.status(201).json(comment)
        } catch (error) {
            next(error)
        }
        
    }
}

module.exports = UserNasaController;