var React = require('react'),
    ArticleTitle = require('./ArticleTitle.jsx'),
    ArticleMeta = require('./ArticleMeta.jsx'),
    ArticleBody = require('./ArticleBody.jsx');

var Article = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      meta: {
        date: "01-01-2001",
        tags: [
          {
            slug: "coop-gaming",
            description: "All about cooperative gaming",
            name: "Coop"
          }
        ]
      },
      body: "This is some body copy."
    };
  },
  render: function() {
    var classes = "article-container" + ((this.state.title) ? " article-active" : "");

    return (
      <div className={classes}>
        <ArticleTitle title={this.state.title} />
        <ArticleMeta {...this.state.meta} />
        <ArticleBody body={this.state.body} />
      </div>
    );
  }
});

module.exports = Article;