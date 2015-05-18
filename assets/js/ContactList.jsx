var React = require('react');

var ContactList = React.createClass({
  getInitialState: function() {
    return {
      github: {
        label: "github",
        src: "https://github.com/augustuswm",
        icon: "\uF09B"
      },
      email: {
        label: "gmail",
        src: "gusmayo@gmail.com",
        icon: "\uF003"
      },
      twitter: {
        label: "twitter",
        src: "https://twitter.com/augustuswm",
        icon: "\uF099"
      }
    };
  },
  render: function() {
    return (
      <ul className="contact-list">
        <li className="contact-item github">
          <a href={this.state.github.src}>
            {this.state.github.label}
            <span className="contact-icon">
              {this.state.github.icon}
            </span>
          </a>
        </li>
        <li className="contact-item email">
          <a href={this.state.email.src}>
            {this.state.email.label}
            <span className="contact-icon">
              {this.state.email.icon}
            </span>
          </a>
        </li>
        <li className="contact-item twitter">
          <a href={this.state.twitter.src}>
            {this.state.twitter.label}
            <span className="contact-icon">
              {this.state.twitter.icon}
            </span>
          </a>
        </li>
      </ul>
    );
  }

});

module.exports = ContactList;