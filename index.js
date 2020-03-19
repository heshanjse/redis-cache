const express = require('express');
const fetch = require('node-fetch');
const route = require('./api/routes/routes')
//const radis = require('radis')

const PORT = process.env.PORT || 5000;
//const RADIS_PORT = process.env.PORT || 6379;

//const client = radis.createClient(RADIS_PORT);
const app = express();
//route(app);

async function getRepos(req,res,next) {
  try {
    console.log('Fetching Data..');
    const {username} = req.params;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    res.send(data);

  } catch (error) {
    console.log(error)
  }
  
}

app.get('/repos/:username',getRepos);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
