const Product = require('../models/product');
const Buyer = require('../models/buyer');

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
  },

  destroy(req, res, next) {
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = deletedProduct;
        next()
      }
    })
  },

  update(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updatedProduct;
        next();
      }
    })
  },

  buy(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $inc: { qty: -1} }, { new: true}, (err, updatedProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updatedProduct;
        next();
      }
    })
  },

  seed(req, res, next) {
    const newListings = [
      {
        type: 'Timothy Grass',
        unit: 'Bale, Square',
        image: 'https://allhay.com/wp-content/uploads/2021/06/BFD1E76C-9CEF-4810-998A-21D95DA2228D-300x300.jpeg',
        price: 6,
        qty: 15,
        seller: 'Jack Bayer'
      },
      {
        type: 'Wheat Straw',
        unit: 'Bale, Square',
        image: 'https://allhay.com/wp-content/uploads/2021/06/PXL_20210426_200312462-300x300.jpg',
        price: 5,
        qty: 30,
        seller: 'Jeremy Lin'
      },
      {
        type: 'Alfalfa',
        unit: 'Bale, Round',
        image: 'https://haymap.com/wp-content/uploads/2020/05/1590262140779img-768x768.jpeg',
        price: 20,
        qty: 10,
        seller: 'V Bayer'
      }
    ];

    Product.create(newListings, (err, createdProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createdProduct;
        next()
      }
    })
  },
}

module.exports = dataController;
