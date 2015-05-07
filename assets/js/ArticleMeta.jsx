var React = require('react'),
    TagList = require('./TagList.jsx');

var ArticleMeta = React.createClass({
  render: function() {
    var classes = "article-date";

    return (
      <div>
        <p className={classes}>{this.props.date}</p>
        <TagList tags={this.props.tags} />
      </div>
    );
  }
});

module.exports = ArticleMeta;