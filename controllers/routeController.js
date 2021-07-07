const express = require('express');
const router = express.Router();
const viewController  = require('./viewController');
const dataController = require('./dataController');


// SEED LISTINGS
router.get('/seed', dataController.seed, viewController.redirectHome);

// INDEX
router.get('/', dataController.index, viewController.index);

// NEW
/* no need for route; using static file */

// DELETE
router.delete('/:id', dataController.destroy, viewController.redirectHome);

// UPDATE
router.put('/:id', dataController.update, viewController.redirectShow);

// CREATE
router.post('/', dataController.create, viewController.redirectHome);

// EDIT
router.get('/:id/edit', dataController.show, viewController.edit);

// SHOW
router.get('/:id', dataController.show, viewController.show);


// (old)
// router.get('/foobar', (req, res) => {
//   Product.create([
//     {
//       type: 'Timothy Grass',
//       unit: 'Bale, Square',
//       image: 'https://allhay.com/wp-content/uploads/2021/06/BFD1E76C-9CEF-4810-998A-21D95DA2228D-300x300.jpeg',
//       price: 6,
//       qty: 15,
//       seller: 'Jack Bayer'
//     },
//     {
//       type: 'Wheat Straw',
//       unit: 'Bale, Square',
//       image: 'https://allhay.com/wp-content/uploads/2021/06/PXL_20210426_200312462-300x300.jpg',
//       price: 5,
//       qty: 30,
//       seller: 'Jeremy Lin'
//     },
//     {
//       type: 'Alfalfa',
//       unit: 'Bale, Round',
//       image: 'https://haymap.com/wp-content/uploads/2020/05/1590262140779img-768x768.jpeg',
//       price: 20,
//       qty: 10,
//       seller: 'V Bayer'
//     }
//   ], (err, data) => {
//     res.redirect('/products');
//   })
// })

// SEED BUYERS
router.get('/seedBuyers', (req, res) => {
  Buyer.create([
    {
      username: 'Snoop Dogg',
      shopping_cart: []
    }
  ], (err, data) => {
    res.redirect('/products');
  })
})

// BUY
router.get('/:id/buy', dataController.buy, viewController.redirectHome);

module.exports = router;
