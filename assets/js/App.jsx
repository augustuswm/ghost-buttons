var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router,
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
    <DefaultRoute handler={Article} />
    <Route name="Article" handler={Article} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById("react-entry"));
});