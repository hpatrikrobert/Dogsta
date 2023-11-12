const mongoose = require('mongoose');
const uri = `mongodb://localhost:27017/events`;

mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true })
.then( console.log('connected'))
.catch(error => console.log(error));

module.exports = mongoose;