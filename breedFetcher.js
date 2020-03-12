const request = require('request');

// function signature means inputs => outputs
// (err, response, callback) => void

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response) => { 
    if (error) {
      callback(`Failed: ${error}`, null)
    } else {
      callback (null, JSON.parse(response.body)[0].description.trim())
    }
  })
}

module.exports = { fetchBreedDescription }
