const {Schema, model} = require('mongoose');
// pull individual functions/objects from uber mongoose object as individual const's

const buyerSchema = new Schema({
  username: {type: String, required: true},
  shopping_cart: Array
});

// defines collection name via plural of first parameter
const Buyer = model('Buyer', buyerSchema);

module.exports = Buyer;
