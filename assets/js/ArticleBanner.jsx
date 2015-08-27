var React = require('react');

var ArticleBanner = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.src !== nextProps.src ||
           this.props.alt !== nextProps.alt;
  },
  render: function() {
    console.log("Render Article Banner");
    return (
      <div className="article-banner">
        <img className="article-banner-image" src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
});

module.exports = ArticleBanner;