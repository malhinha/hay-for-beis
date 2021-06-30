const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render() {
    const products = this.props.products;

    return(
      <DefaultLayout title={"Products Index Page"}>
      <ul>
        {
          products.map((product) => {
            return (
              <li key={product._id}>
                <a href={`/products/${product._id}`}><img src={`${product.image}`} /></a><br />
                Type: {product.type}<br />
                Sold By The: {product.unit}<br />
                Price: ${product.price}<br />
                Quantity: {product.qty}<br />
                Seller: {product.seller}<br />
              </li>
            );
          })
        }
      </ul>
      <nav>
        <a href="/products/new">Add a New Listing</a>
      </nav>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
