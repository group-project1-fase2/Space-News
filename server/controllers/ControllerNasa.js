const axios = require('axios');
const apiKey = `qHtc2PKVKCrWuWuhCgLTNv7ual4h611qWpN7PRN5`

class ControllerNasa {
  static nasa(req, res) {
    /*gambar asteroid*/
    axios({
      method: "GET",
      url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
      params: {
        date: req.query.date
      }
    })
      .then(function (response) {
        console.log(response.data)
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
    const data = []
    axios({
      method: "GET",
      url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${apiKey}`
    })
      .then(function (response) {
        let tgl = Object.keys(response.data.near_earth_objects)
        for (let i = 0; i < tgl.length; i++) {
          for (let j = 0; j < response.data.near_earth_objects[`${tgl[0]}`].length; j++) {
            data.push({
              tanggal: tgl[i],
              name: response.data.near_earth_objects[`${tgl[i]}`][j].name,
              nasa_jpl_url: response.data.near_earth_objects[`${tgl[i]}`][j].nasa_jpl_url
            })
          }
        }
        res.status(200).json(data)
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
    let data = []
    let date = req.query.date
    axios({
      method: "GET",
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${apiKey}`
    })
      .then(function (response) {
        for (let i = 0; i < response.data.photos.length; i++) {
          data.push({
            camera: response.data.photos[i].camera.full_name,
            img_src: response.data.photos[i].img_src
          })
        }
        res.status(200).json(data)
      })
      .catch(function (error) {
        res.status(500).json(error)
      })
  }
}

module.exports = ControllerNasa