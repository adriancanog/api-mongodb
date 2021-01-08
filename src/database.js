const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/cursosapi',
 {useNewUrlParser: true, useUnifiedTopology: true})
 .then( db => console.log("base de datos conectada"))
 .catch(err => console.error(err));