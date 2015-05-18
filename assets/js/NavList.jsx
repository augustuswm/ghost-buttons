var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router;

var NavList = React.createClass({
  getInitialState: function() {
    return {
      linkList: [
        {label: "Consume", icon: "\uF03A", src: "Storage"},
        {label: "Read", icon: "\uF1EA", src: "Magazine"},
        {label: "Watch", icon: "\uF152", src: "Gallery"},
        {label: "Play", icon: "\uF1D9", src: "Arcade"}
      ]
    };
  },
  render: function() {
    var navLinks = this.state.linkList.map(function(link) {
      return (
        <Link to={link.src} className="nav-item" key={link.label}>
          <li>
            <span className="nav-icon">{link.icon}</span>{link.label}
          </li>
        </Link>
      );
    });

    return (
      <ul className="nav-list">
        {navLinks}
      </ul>
    );
  }

});

module.exports = NavList;