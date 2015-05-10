var React = require('react'),
    Immutable = require('Immutable'),
    Article = require('./Article.jsx'),
    ArticleButtonList = require('./ArticleButtonList.jsx');

var Magazine = React.createClass({
  getInitialState: function() {
    return Immutable.Map({
      articles: Immutable.List([
        { id: 1, slug: "post-one", title: "First Article"},
        { id: 2, slug: "post-two", title: "Second Article"},
        { id: 3, slug: "post-three", title: "Third Article"},
        { id: 4, slug: "post-four", title: "Fourth Article"},
        { id: 5, slug: "post-five", title: "Fifth Article"}
      ])
    });
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.params !== nextProps.params ||
           this.state !== nextState;
  },
  render: function() {
    return (
      <div>
        <Article {...this.props.params} />
        <ArticleButtonList articles={this.state.get('articles')} activeSlug={this.props.params.slug} />
      </div>
    );
  }
});

module.exports = Magazine;