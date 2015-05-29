var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router;

var NavList = React.createClass({
  render: function() {
    var navLinks = this.props.linkList.map(function(link) {
      return (
        <Link to={link.src} rel={link.rel} className="nav-item" key={link.label} onClick={link.callback} >
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