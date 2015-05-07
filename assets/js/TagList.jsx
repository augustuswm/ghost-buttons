var React = require('react'),
    Tag = require('./Tag.jsx');

var TagList = React.createClass({
  render: function() {
    var classes = "taglist-list",
        list = this.props.tags.map(function(tag, i) {
          return (
            <Tag key={i} {...tag} />
          );
        });

    return (
      <ul className={classes}>
        {list}
      </ul>
    );
  }
});

module.exports = TagList;