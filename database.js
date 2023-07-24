const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:/nomeBanco', {useMongoCliente: true});

module.exports = mongoose;