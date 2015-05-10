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
      <div>
        {articleRows}
      </div>
    );
  }
});

module.exports = ArticleButtonList;