var React = require('react'),
    Immutable = require('Immutable'),
    Article = require('./Article.jsx');

var Magazine = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.params !== nextProps.params ||
           this.state !== nextState;
  },
  render: function() {
    return (
      <div className="magazine">
        <Article {...this.props.params} />
      </div>
    );
  }
});

module.exports = Magazine;