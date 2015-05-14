var React = require('react');

var Search = React.createClass({
  handleSearchChange: function() {
    this.props.onSearchUpdate(
      this.refs.searchBox.getDOMNode().value
    );
  },
  render: function() {
    return (
      <div className="search-container">
        <input className="search-box" ref="searchBox" type="text" placeholder="Search" onChange={this.handleSearchChange} />
      </div>
    );
  }

});

module.exports = Search;