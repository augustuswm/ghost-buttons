var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router,
    Home = require('./Home.jsx'),
    Magazine = require('./Magazine.jsx'),
    Article = require('./Article.jsx');

var App = React.createClass({
  render: function() {
    return (
      <RouteHandler />
    );
  }
});

var routes = (
  <Route handle={App}>
    <DefaultRoute handler={Home} />
    <Route name="Magazine" path="magazine" handler={Magazine}>
      <Route name="Article" path="/article/:slug" handler={Article} />
    </Route>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById("react-entry"));
});