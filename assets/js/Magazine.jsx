var React = require('react'),
    Immutable = require('Immutable'),
    Article = require('./Article.jsx'),
    Search = require('./Search.jsx');

var ArticleSlugStore = [
  "post-one",
  "post-two"
];

var Magazine = React.createClass({
  getInitialState: function() {
    return {
      fullSlugList: ArticleSlugStore,
      slugList: this.props.params && this.props.params.slug && [this.props.params.slug] || ArticleSlugStore,
      onArticle: this.props.params && this.props.params.slug
    };
  },
  filterStrings: function(list, filter) {
    return list.filter(function(element) {
      return element.search(filter) !== -1;
    });
  },
  handleSearchUpdate: function(filter) {
    this.setState({
      searchString: filter,
      slugList: this.filterStrings(this.state.fullSlugList, filter),
      onArticle: false
    });
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      slugList: nextProps.params && nextProps.params.slug && [nextProps.params.slug] || this.filterStrings(this.state.fullSlugList, this.state.searchString),
      onArticle: nextProps.params && nextProps.params.slug
    });
  },
  render: function() {
    var active = this.state.slugList.length === 1,
        articles = this.state.slugList.map(function(articleSlug) {
          return (
            <Article key={articleSlug} slug={articleSlug} active={active} />
          );
        });

    return (
      <div className="magazine">
        <Search
          searchString={this.state.searchString}
          onSearchUpdate={this.handleSearchUpdate}
          disabled={this.state.onArticle} />
        <div className="article-block">
          {articles}
        </div>
      </div>
    );
  }
});

module.exports = Magazine;