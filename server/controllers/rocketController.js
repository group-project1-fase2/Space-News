const {Rocket, User, UserRocket} = require('../models/index');

class RocketController {
    static async getAll(req, res, next) {
        try {
            const rocket = await Rocket.findAll({
                include: [User, UserRocket]
            })
            res.status(200).json(rocket);
        } catch (error) {
            next(error)
        }
    }

    static async add(req, res, next) {
        const newRocket = {
            mission: req.body.mission,
            launch: req.body.launch,
            time_target: req.body.time_target,
            pad_location: req.body.pad_location,
            customerOrganization: req.body.customerOrganization
        }

        console.log(newRocket);
        try {
            const rocket = await Rocket.create(newRocket);
            res.status(201).json(rocket);
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = RocketController