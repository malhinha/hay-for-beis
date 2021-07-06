const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <DefaultLayout title={"Hay for Sale"}>
        <div className="detailCard" key={product._id}>
          <div className="productShot"><img src={`${product.image}`} /></div>
          <div className="productInfo">
            <label>Type:</label><div className="desc">{product.type}</div>
            <label>Sold By The:</label><div className="desc">{product.unit}</div>
            <label>Price:</label><div className="desc">${product.price}</div>
            <label>Quantity:</label><div className="desc">{product.qty}</div>
            <label>Seller:</label><div className="desc">{product.seller}</div>
          </div>
          <div className="cardFunctions">
            <button><a href={`/products/${product._id}/edit`}>Edit</a></button>
            <form method="POST" action={`/products/${product._id}?_method=DELETE`}>
              <button type="submit" value="DELETE">Delete</button>
            </form>
          </div>
          {
            product.qty
            ? <form action={`/products/${product._id}/buy`}>
               <button type="submit" value="BUY">Buy</button>
              </form>
            : <div id="sold-out">Sold Out</div>
          }
        </div>

        <a href={`/products/`}>Back to Listings</a>
      </DefaultLayout>
    )
  }
}

module.exports = Show;
