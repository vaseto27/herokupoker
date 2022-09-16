//Install express server
const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');

const app = express();

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/pokerstats',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
// );

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/herokupoker'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/herokupoker/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
