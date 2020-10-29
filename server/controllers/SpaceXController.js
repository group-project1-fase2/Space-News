const axios = require('axios');
const server = "https://api.spacexdata.com/v4"

class SpaceXController {
    //https://api.spacexdata.com/v4/launches/upcoming -> name (mission)
    //https://api.spacexdata.com/v4/launches/upcoming -> date_local (time (Target Date))
    static launchesUpcoming(req, res, next) {
        axios({
            mehod:"get",
            url: server+ "/launches/upcoming",
            responseType: 'json'
        })
        .then(response => {
            res.status(response.status).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }

    //https://api.spacexdata.com/v4/rockets/:id (rockets id from launches upcoming) -> name, country (rockets and country)
    static rockets(req, res, next){
        axios({
            mehod:"get",
            url: server+ `/rockets/${req.params.id}`,
            responseType: 'json',
            params: {
                id: req.params.id
            }
        })
        .then(response => {
            // console.log(response)
            res.status(response.status).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }

    //https://api.spacexdata.com/v4/launchpads/:id (launchpads id from launches upcoming)-> full_name (Pad location)
    static launchpads(req, res, next){
        console.log(req.params.id)
        axios({
            mehod:"get",
            url: server+ `/launchpads/${req.params.id}`,
            responseType: 'json',
            params: {
                id: req.params.id
            }
        })
        .then(response => {
            // console.log(response)
            res.status(response.status).json(response.data)
        })
        .catch(err => {
            // console.log(err)
            res.status(500).json(err)
        })
    }

    //https://api.spacexdata.com/v4/payloads/:id (payloads id from launches upcoming)-> customers (Customer Organization)
    static payloads(req, res, next){
        axios({
            mehod:"get",
            url: server+ `/payloads/${req.params.id}`,
            responseType: 'json',
            params: {
                id: req.params.id
            }
        })
        .then(response => {
            // console.log(response)
            res.status(response.status).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }
}

module.exports = SpaceXController