var React = require('react'),
    Router = require('react-router'),
    io = require('socket.io-client')(),
    { Route, DefaultRoute, RouteHandler, Link } = Router,
    Home = require('./Home.jsx'),
    Magazine = require('./Magazine.jsx'),
    Nav = require('./Nav.jsx'),
    BackgroundNav = require('./BackgroundNav.jsx'),
    Author = require('./Author.jsx');

var compileHandler = function(e) {
      e.preventDefault();
      io.emit("compile", "");
    };

var linkStore = [
      {label: "Consume", icon: "\uF03A", src: "Storage", callback: function() {}},
      {label: "Read", icon: "\uF1EA", src: "Magazine", callback: function() {}},
      {label: "Watch", icon: "\uF152", src: "Gallery", callback: function() {}},
      {label: "Play", icon: "\uF1D9", src: "Arcade", callback: function() {}},
      {label: "Recompile BG", icon: "\uF1D9", src: "/", callback: compileHandler}
    ],
    contactLinkStore = [
      {label: "github", src: "https://github.com/augustuswm", icon: "\uF09B", rel: "external", callback: function() {}},
      {label: "gmail", src: "https://gusmayo@gmail.com", icon: "\uF003", rel: "external", callback: function() {}},
      {label: "twitter", src: "https://twitter.com/augustuswm", icon: "\uF099", rel: "external", callback: function() {}}
    ],
    backgroundLinkStore = linkStore.concat(contactLinkStore);

io.on("recompiled", function(data) {
  if (data && data.css) {
    document.getElementById("css-override").innerHTML = data.css;
  }
});

// React.initializeTouchEvents(true);

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
    console.log("Render App");

    return (
      <div id="app" className={toggleNavClass}>
        <div className="container">
          <div className="container-main">
            <BackgroundNav linkList={backgroundLinkStore} />
            <RouteHandler />
            <Nav linkList={linkStore} toggleNav={this.toggleNav} />
            <div className="nav-name-right"><span></span></div>
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