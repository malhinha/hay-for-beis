const RESOURCE_PATH = '/products';

const viewController = {
  index(req, res, next) {
    res.render('Index', {products: res.locals.data.products})
  },

  show(req, res, next) {
    res.render('Show', {product: res.locals.data.product})
  },

  redirectHome(req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
}

module.exports = viewController;
