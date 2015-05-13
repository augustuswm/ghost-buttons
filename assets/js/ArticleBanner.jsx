var React = require('react');

var ArticleBanner = React.createClass({
  render: function() {
    return (
      <div className="article-banner">
        <img className="article-banner-image" src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
});

module.exports = ArticleBanner;