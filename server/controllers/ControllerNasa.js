const axios = require('axios');
const apiKey = `qHtc2PKVKCrWuWuhCgLTNv7ual4h611qWpN7PRN5`

class ControllerNasa {
  static nasa(req, res) {
    /*gambar asteroid*/
    axios({
      method: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
      params: {
        date: req.body.date
      }
    })
      .then(function (response) {
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        res.status(500).json(error)
      })
  }

  static asteroid(req, res) {
    /* Ambil daftar Asteroid berdasarkan tanggal terdekatnya ke Bumi*/
    /*tanggal bisa di namis*/
    const start_date = req.query.start_date
    const end_date = req.query.end_date
    axios({
      method: "GET",
      url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${apiKey}`
    })
      .then(function (response) {
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        res.status(500).json(error)
      })
  }

  static earthObservation(req, res) {
    const lat = req.query.lat
    const lon = req.query.lon
    const date = req.query.date
    axios({
      method: "GET",
      url: `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&api_key=DEMO_KEY`
    })
      .then(function (response) {
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        res.status(500).json(error)
      })
  }

  static marsRoverPhotos(req, res) {
    axios({
      method: "GET",
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${apiKey}`
    })
      .then(function (response) {
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        res.status(500).json(error)
      })
  }
}

module.exports = ControllerNasa