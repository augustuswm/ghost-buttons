var React = require('react');

var ArticleBody = React.createClass({
  render: function() {
    var classes = "article-body";

    return (
      <p className={classes}>{this.props.body}</p>
    );
  }
});

module.exports = ArticleBody;