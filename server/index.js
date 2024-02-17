const auradb = require('./auradb');
const prompt = require('prompts');
const express  = require('express');

const PORT = process.env.PORT || 3001;


//TODO remove this
const NEO4J_URI="neo4j+s://777ef14a.databases.neo4j.io"
const NEO4J_USERNAME="neo4j"
const NEO4J_PASSWORD="fb8nO8YQkykxF_ArGxkvD5lH7P2KH3DygLeA99swNj0"

// const uri = prompt("Enter your URI:");
// const user = prompt("Enter your username:");
// const password = prompt("Enter your password:");

const driver = auradb.authenticate(NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD);
driver.then((result) => {
  auradb.getData(result)
}).catch((error) => {
  console.log(error);
  console.log("Error getting info");
});

app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


// app.get("/api", (req, res) => {
//   res.send(data);
// }); 