var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router;;

var ContactList = React.createClass({
  render: function() {
    var contactLinks = this.props.linkList.map(function(link) {
      var itemClass = "contact-item" + (link.label ? " " + link.label : "");

      return (
        <li className={itemClass} key={link.label}>
          <Link to={link.src} rel={link.rel} onClick={link.callback} >
            {link.label}
            <span className="contact-icon">
              {link.icon}
            </span>
          </Link>
        </li>
      );
    });

    return (
      <ul className="contact-list">
        {contactLinks}
      </ul>
    );
  }

});

module.exports = ContactList;