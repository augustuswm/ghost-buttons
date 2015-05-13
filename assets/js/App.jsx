var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router,
    Home = require('./Home.jsx'),
    Magazine = require('./Magazine.jsx'),
    Article = require('./Article.jsx'),
    Sidebar = require('./Sidebar.jsx');

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
  <Route name="Entry" path="/index.html" handler={App}>
    <Route name="Home" path="/" handler={Home}>
      <Route name="Magazine" path="magazine" handler={Magazine}>
        <Route name="Article" path="/article/:slug" handler={Article} />
      </Route>
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById("react-entry"));
});