const axios = require('axios');


async function fetch (){
    const Response = await axios.get('https://www.omdbapi.com/?t=harry&apikey=bea767bd')
    console.log(Response.data);
}

fetch();