const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/requireimage', express.static(__dirname + '/public/images'));
app.use('/requirestatus', express.static(__dirname + '/public/status'));


app.listen(3000, () => {
    console.log("Server listening on 3000");
})