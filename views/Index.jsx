const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render() {
    const products = this.props.products;

    return(
      <DefaultLayout title={"Buy Hay from your Bei today!"}>
        <nav>
          <a href="/products/new">Add a New Listing</a>
        </nav>
        <div id="gallery">
          {
          products.map((product) => {
            return (
              <div className="card" key={product._id}>
                <div className="productShot"><a href={`/products/${product._id}`}><img src={`${product.image}`} /></a></div>
                <div className="productInfo">
                  <label>Type:</label><div className="desc">{product.type}</div>
                  <label>Sold By The:</label><div className="desc">{product.unit}</div>
                  <label>Price:</label><div className="desc">${product.price}</div>
                  <label>Quantity:</label><div className="desc">{product.qty}</div>
                  <label>Seller:</label><div className="desc">{product.seller}</div>
                </div>
              </div>
            );
          })
          }
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
