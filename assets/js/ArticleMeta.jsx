var React = require('react'),
    TagList = require('./TagList.jsx');

var ArticleMeta = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.date !== nextProps.date ||
           this.props.tags !== nextProps.tags;
  },  
  render: function() {
    console.log("Render Meta");
    var classes = "article-date";

    return (
      <div>
        <p className={classes}>{this.props.date}</p>
        <TagList tags={this.props.tags} />
      </div>
    );
  }
});

module.exports = ArticleMeta;