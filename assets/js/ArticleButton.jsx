var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler, Link } = Router;

var ArticleButton = React.createClass({
  getInitialState: function() {
    var skittleColors = ["red", "orange", "yellow", "green", "purple"],
        skittleSeed = Math.floor(Math.min(Math.random() * 5, 5));

    return {
      skittlesColor: skittleColors[skittleSeed]
    };
  },
  render: function() {
    var firstLetter = this.props.title.substring(0, 1),
        classes = "article-button skittles-" + this.state.skittlesColor + (this.props.isActive ? " active" : "");

    return (
      <div className={classes}>
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