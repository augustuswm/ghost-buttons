var React = require('react'),
    Router = require('react-router'),
    io = require('socket.io-client')(),
    { Route, DefaultRoute, RouteHandler, Link } = Router,
    Home = require('./Home.jsx'),
    Magazine = require('./Magazine.jsx'),
    Nav = require('./Nav.jsx'),
    Author = require('./Author.jsx');

var compileHandler = function(e) {
      e.preventDefault();
      io.emit("compile", "");
    };

io.on("recompiled", function(data) {
  if (data && data.css) {
    document.getElementById("css-override").innerHTML = data.css;
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      navActive: false 
    };
  },
  toggleNav: function() {
    this.setState({
      navActive: !this.state.navActive 
    });
  },
  render: function() {
    var toggleNavClass = this.state.navActive ? "nav-active" : "";

    return (
      <div className={toggleNavClass}>
        <div className="backgrounds">
          <div className="bg1"></div>
          <div className="bg2"></div>
        </div>
        <div className="container">
          <div className="container-main">
            <Nav compileHandler={compileHandler} toggleNav={this.toggleNav} />
            <Author />
            <RouteHandler />
          </div>
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