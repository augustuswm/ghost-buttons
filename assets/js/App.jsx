var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router,
    Home = require('./Home.jsx'),
    Magazine = require('./Magazine.jsx'),
    Article = require('./Article.jsx'),
    Search = require('./Search.jsx');

var ArticleSlugStore = [
  "post-one",
  "post-two"
];

var App = React.createClass({
  getInitialState: function() {
    return {
      slugList: ArticleSlugStore 
    };
  },
  handleSearchUpdate: function(filter) {
    this.setState({
      slugList: ArticleSlugStore.filter(function(slug) {
        return slug.search(filter) !== -1;
      })
    });
  },
  render: function() {
    var slugList = this.props.params && this.props.params.slug ? [this.props.params.slug] : this.state.slugList;

    return (
      <div className="container">
        <Search onSearchUpdate={this.handleSearchUpdate} />
        <div className="container-main">
          <RouteHandler slugList={slugList} />
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="Entry" path="" handler={App}>
    <Route name="Home" path="/home" handler={Home}>
      <Route name="Magazine" path="/magazine" handler={Magazine}>
        <Route name="Article" path="/article/:slug" handler={Article} />
      </Route>
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById("react-entry"));
});