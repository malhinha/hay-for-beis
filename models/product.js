const {Schema, model} = require('mongoose');
// pull individual functions/objects from uber mongoose object as individual const's

const productSchema = new Schema({
  type: {type: String, required: true},
  unit: {type: String, required: true},
  image: {type: String, required: true},
  price: {type: Number, required: true},
  qty: {type: Number, required: true},
  seller: {type: String, required: true}
});

// defines collection name via plural of first parameter
const Product = model('Product', productSchema);

module.exports = Product;
