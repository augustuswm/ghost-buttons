var React = require('react');

var Tag = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.slug !== nextProps.slug ||
           this.props.description !== nextProps.description ||
           this.props.name !== nextProps.name;
  },
  render: function() {
    console.log("Render Tag");
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