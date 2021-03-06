const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return(
      <html lang="en" dir="ltr">
        <head>
          {/* charset needs to be Camel Cased in JSX */}
          <meta charSet="utf-8" />

          {/* This let's us dynamically create the title */}
          <title>{this.props.title}</title>

          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <header>
            <a href="/products"><div id="logo">Bei's Hay</div></a>
            <div id="utility">
              <div>Cart</div>
              <div className="cart-count"></div>
            </div>
          </header>
          <main>
            <h1>{this.props.title}</h1>
            {/* This is the start where the page content will be interjected  */}

            {this.props.children}

            {/* This is the end where the page content will be interjected  */}
          </main>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;
