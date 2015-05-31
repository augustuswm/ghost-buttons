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
      onArticle: this.props.params && this.props.params.slug || false,
      searchString: ""
    };
  },
  filterStrings: function(list, filter) {
    var filterString = filter.toLowerCase();
    return list.filter(function(element) {
      return element.toLowerCase().search(filterString) !== -1;
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
      onArticle: nextProps.params && nextProps.params.slug && true || false
    });
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log(this.state.slugList.length, nextState.slugList.length);
    return this.state.slugList.length !== nextState.slugList.length;
  },
  render: function() {
    console.log("Render Magazine");
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