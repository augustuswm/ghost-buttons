var React = require('react'),
    ContactList = require('./ContactList.jsx');

var Author = React.createClass({
  getInitialState: function() {
    return {
      author: "awm" 
    };
  },
  render: function() {
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