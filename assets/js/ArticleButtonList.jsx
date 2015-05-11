var React = require('react'),
    ArticleButton = require('./ArticleButton.jsx');

var ArticleButtonList = React.createClass({
  render: function() {
    var articleRows = this.props.articles.map(function(articleData, i) {
      return (
        <ArticleButton key={articleData.slug} {...articleData} isActive={this.props.activeSlug === articleData.slug} />
      );
    }.bind(this));

    return (
      <div className="article-button-list">
        {articleRows}
      </div>
    );
  }
});

module.exports = ArticleButtonList;