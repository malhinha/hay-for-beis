const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');

class Edit extends React.Component {
  render(){
    const product = this.props.product;

    return (
      <DefaultLayout title="Edit Listing">

        <div className="card" id="form">
        <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
          <label>Image:</label> <input type="text" name="image" defaultValue={this.props.product.image} />
          <label>Type:</label> <input type="text" name="type" defaultValue={this.props.product.type} />
          <label>Sold By The:</label> <input type="text" name="unit" defaultValue={this.props.product.unit} />
          <label>Price:</label> <input type="text" name="price" defaultValue={this.props.product.price} />
          <label>Quantity:</label> <input type="text" name="qty" defaultValue={this.props.product.qty} />
          <label>Seller:</label> <input type="text" name="seller" defaultValue={this.props.product.seller} />
          <button type="submit" name="" value="Save Changes">Save Changes</button>
        </form>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Edit;
