var React = require('react'),
    Tag = require('./Tag.jsx');

var TagList = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.tags !== nextProps.tags;
  },
  render: function() {
    console.log("Render TagList");
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