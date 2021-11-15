const axios = require("axios");
require("dotenv").config();
const countries = require("./countries.json");

const getNews = async(country) => {
  try{
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`)
    return {
      country,
      articles: data.articles 
    }
  }
  catch(err){
    console.log("ERROR>>>", err.response)
  }
};

module.exports = async function() {
  const newsPromise = countries.map(getNews);
  return await Promise.all(newsPromise);
}