var React = require('react');

var ArticleTitle = React.createClass({
  render: function() {
    var classes = "article-title";

    return (
      <h1 className={classes}>
        <div className="article-title-text">
          {this.props.title}
        </div>
        <div className="article-title-date">
          {this.props.date}
        </div>
      </h1>
    );
  }
});

module.exports = ArticleTitle;