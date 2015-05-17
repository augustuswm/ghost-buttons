var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router,
    Home = require('./Home.jsx'),
    Magazine = require('./Magazine.jsx'),
    Article = require('./Article.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="container-main">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="Entry" path="/" handler={App}>
    <Route name="Magazine" path="magazine" handler={Magazine} />
    <Route name="Article" path="article/:slug" handler={Magazine} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById("react-entry"));
});