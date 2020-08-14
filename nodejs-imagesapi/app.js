const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const {spawn} = require('child_process');


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

app.get("/execute", (req, res) => {

  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python3', ['hola.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
   console.log('Pipe data from python script ...');
   dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  // send data to browser
  res.send(dataToSend)
  });

});

app.listen(3000, () => {
    console.log("Server listening on 3000");
})