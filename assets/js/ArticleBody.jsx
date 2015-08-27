var React = require('react');

var ArticleBody = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.body !== nextProps.body;
  },
  render: function() {
    var classes = "article-body";
    console.log("Render Article Body");

    return (
      <p className={classes} dangerouslySetInnerHTML={{__html: this.props.body}}></p>
    );
  }
});

module.exports = ArticleBody;