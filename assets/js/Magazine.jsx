var React = require('react'),
    Immutable = require('Immutable'),
    Article = require('./Article.jsx');

var Magazine = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  },
  render: function() {
    var articles = this.props.slugList.map(function(articleSlug) {
      return (
        <Article key={articleSlug} slug={articleSlug} active={this.props.slugList.length === 1} />
      );
    }.bind(this));

    return (
      <div className="magazine">
        {articles}
      </div>
    );
  }
});

module.exports = Magazine;