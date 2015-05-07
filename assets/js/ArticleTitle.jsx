var React = require('react');

var ArticleTitle = React.createClass({
  render: function() {
    var classes = "article-title";

    return (
      <h1 className={classes}>{this.props.title}</h1>
    );
  }
});

module.exports = ArticleTitle;