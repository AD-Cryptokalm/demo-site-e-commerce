const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categorie: { type: String},
    name: { type: String },
    imageUrl: { type: String },
    price: { type: String},
    description: {type: String},
  },
  );

module.exports = mongoose.model('product', productSchema);