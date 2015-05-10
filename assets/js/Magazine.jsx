var React = require('react'),
    Article = require('./Article.jsx'),
    ArticleButton = require('./ArticleButton.jsx');

var Magazine = React.createClass({
  getInitialState: function() {
    return {
      articles: [
        { id: 1, slug: "post-one", title: "First Article"},
        { id: 2, slug: "post-two", title: "Second Article"},
        { id: 3, slug: "post-three", title: "Third Article"},
        { id: 4, slug: "post-four", title: "Fourth Article"},
        { id: 5, slug: "post-five", title: "Fifth Article"}
      ] 
    };
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.params !== nextProps.params ||
           this.state !== nextState;
  },
  render: function() {
    var articleRows = this.state.articles.map(function(articleData, i) {
      return (
        <ArticleButton key={i} {...articleData} />
      );
    });

    return (
      <div>
        <Article {...this.props.params} />
        {articleRows}
      </div>
    );
  }
});

module.exports = Magazine;