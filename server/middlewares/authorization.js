const {Todo} = require('../models/index');

async function authorization(req, res, next){
    try {
        const id = req.params.id;
        const authById = await Todo.findByPk(id);
        if (!authById) {
            res.status(404).json({
                msg: 'Authorization failed'
            })
        } else if (authById.UserId == req.userHasLogin.id) {
            next();
        } else {
            res.status(401).json({
                msg: 'Authorization failed'
            })
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = authorization;