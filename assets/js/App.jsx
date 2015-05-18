var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router,
    Home = require('./Home.jsx'),
    Magazine = require('./Magazine.jsx'),
    Nav = require('./Nav.jsx'),
    Author = require('./Author.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="container-main">
          <Nav />
          <Author />
          <RouteHandler />
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="Entry" path="/" handler={App}>
    <Route name="Storage" path="storage" handler={Magazine} />
    <Route name="Magazine" path="magazine" handler={Magazine} />
    <Route name="Gallery" path="gallery" handler={Magazine} />
    <Route name="Arcade" path="arcade" handler={Magazine} />
    <Route name="Article" path="article/:slug" handler={Magazine} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById("react-entry"));
});