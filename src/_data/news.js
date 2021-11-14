const axios = require("axios");
require("dotenv").config();

module.exports = async function() {
  try{
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=ro&apiKey=${process.env.API_KEY}`)
    return data
  }
  catch(err){
    console.log(err)
  }
}