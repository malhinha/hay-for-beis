const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <DefaultLayout title={"Hay for Sale"}>
        <img src={product.image} /><br />
        Type: {product.type}<br />
        Sold By The: {product.unit}<br />
        Price: ${product.price}<br />
        Quantity: {product.qty}<br />
        Seller: {product.seller}<br />
      </DefaultLayout>
    )
  }
}

module.exports = Show;
