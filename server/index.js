const auradb = require('./auradb');
const prompt = require('prompts');
const express  = require('express');
const PORT = process.env.PORT || 3001;

//Right now env does not load properly, run with node --env-file=.env index.js
const NEO4J_URI=process.env.NEO4J_URI
const NEO4J_USERNAME=process.env.NEO4J_USERNAME
const NEO4J_PASSWORD=process.env.NEO4J_PASSWORD

const driver = auradb.authenticate(NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD);
driver.then((driver) => {

  app = express();
  
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });


  app.get("/api", (req, res) => {
    auradb.getCompanies(driver).then((data) => {
      res.send(data);
    }).catch((error) => {
      console.log(error);
    });
  });
  
  app.get("/api/:name", (req, res) => {
    console.log(req.params.name);
    auradb.getCompanyByName(driver, req.params.name).then((data) => {
      res.send(data);
    }).catch((error) => {
      console.log(error);
    });
});
}).catch((error) => {
  console.log(error);
  console.log("Error getting info");
});
