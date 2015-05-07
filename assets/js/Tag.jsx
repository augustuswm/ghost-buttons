var React = require('react');

var Tag = React.createClass({
  render: function() {
    var classes = "taglist-tag",
        url = "tags/" + this.props.slug;

    return (
      <li className={classes}>
        <a href={url} alt={this.props.description}>
          {this.props.name}
        </a>
      </li>
    );
  }
});

module.exports = Tag;