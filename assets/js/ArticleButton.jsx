var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router;

var ArticleButton = React.createClass({
  render: function() {
    var firstLetter = this.props.title.substring(0, 1);

    return (
      <div className="article-button">
        <Link to="Article" params={{ slug: this.props.slug }}>
          <div className="article-button-background"></div>
          <div className="article-button-border"></div>
          <div className="article-button-text">{firstLetter}</div>
        </Link>
      </div>
    );
  }
});

module.exports = ArticleButton;