const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fastifycrud')
.then(() => console.log('MongodbConected'))
.catch((err) => console.log(err))