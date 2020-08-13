const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

const dataPath = __dirname + '/status.json';

app.use('/requireimage', express.static(__dirname + '/public/images'));

app.get("/getstatus", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

app.listen(3000, () => {
    console.log("Server listening on 3000");
})