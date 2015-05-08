var React = require('react'),
    ArticleTitle = require('./ArticleTitle.jsx'),
    ArticleMeta = require('./ArticleMeta.jsx'),
    ArticleBody = require('./ArticleBody.jsx');

var ArticleStore = {
  "post-one": {
    title: "This is the first post",
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
    body: "This is some body copy all about the first post on the blog."
  },
  "post-two": {
    title: "Another post",
    meta: {
      date: "01-01-2099",
      tags: [
        {
          slug: "not-coop-gaming",
          description: "Nothing about cooperative gaming",
          name: "Not Coop"
        }
      ]
    },
    body: "This is another post, likely the second one made."
  }
};

var Article = React.createClass({
  getEmptyState: function() {
    return {
      title: "",
      meta: {
        date: "",
        tags: []
      },
      body: ""
    };
  },
  getInitialState: function() {
    return ArticleStore[this.props.slug] || this.getEmptyState();
  },
  componentWillReceiveProps: function(nextProps) {
    if (this.props.slug !== nextProps.slug) {
      this.setState(ArticleStore[nextProps.slug] || this.getEmptyState());
    }
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