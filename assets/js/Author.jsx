var React = require('react'),
    ContactList = require('./ContactList.jsx');

var Author = React.createClass({
  getInitialState: function() {
    return {
      author: "awm" 
    };
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.linkList !== nextProps.linkList;
  },
  render: function() {
    console.log("Render Author");
    return (
      <div className="author-block">
        <div className="author-name">
          {this.state.author}
        </div>
        <ContactList linkList={this.props.linkList} />
      </div>
    );
  }

});

module.exports = Author;