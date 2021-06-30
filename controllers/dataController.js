const Product = require('../models/product');

const dataController = {
  index(req, res, next) {
    Product.find({}, (err, foundProducts) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.products = foundProducts
        next()
      }
    })
  },

  show(req, res, next) {
    Product.findById(req.params.id, (err, foundProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = foundProduct;
        next()
      }
    })
  },

  create(req, res, next) {
    Product.create(req.body, (err, createdProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createdProduct;
        next()
      }
    })
  }
}

module.exports = dataController;
