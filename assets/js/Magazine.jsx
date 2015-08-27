var React = require('react'),
    Article = require('./Article.jsx'),
    Search = require('./Search.jsx');

var ArticleSlugStore = [
  "it-finally-works",
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
    return this.state.slugList.length !== nextState.slugList.length ||
           this.state.searchString !== nextState.searchString;
  },
  render: function() {
    console.log("Render Magazine");
    var active = this.state.slugList.length === 1,
        articles = this.state.fullSlugList.map(function(articleSlug) {
          var isActive = active && this.state.slugList[0] === articleSlug,
              isInactive = active && !isActive;

          return (
            <Article key={articleSlug} slug={articleSlug} active={isActive} inactive={isInactive} />
          );
        }.bind(this));

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