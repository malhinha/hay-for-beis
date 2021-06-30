const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render(){
    const product = this.props.product;

    return (
      <DefaultLayout title="Edit Listing">

        <img src={product.image} /><br />
        <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
          <label>Image:</label> <input type="text" name="image" defaultValue={this.props.product.image} /><br/>
          <label>Type:</label> <input type="text" name="type" defaultValue={this.props.product.type} /><br/>
          <label>Sold By The:</label> <input type="text" name="unit" defaultValue={this.props.product.unit} /><br/>
          <label>Price:</label> <input type="text" name="price" defaultValue={this.props.product.price} /><br/>
          <label>Quantity:</label> <input type="text" name="qty" defaultValue={this.props.product.qty} /><br/>
          <label>Seller:</label> <input type="text" name="seller" defaultValue={this.props.product.seller} /><br/>
          <input type="submit" name="" value="Save Changes"/>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
