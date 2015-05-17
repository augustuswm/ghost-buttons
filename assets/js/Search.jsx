var React = require('react');

var Search = React.createClass({
  handleSearchChange: function() {
    this.props.onSearchUpdate(
      this.refs.searchBox.getDOMNode().value
    );
  },
  render: function() {
    var author = this.props.author || "awm",
        searchClasses = [
          "search-box",
          this.props.searchString ? "has-active-search" : ""
        ].join(" ");

    return (
      <div className="header-container">
        <div className="nav-container col-md-4">
        </div>
        <div className="search-container col-md-4">
          <input
            className={searchClasses}
            ref="searchBox"
            type="text"
            value={this.props.searchString}
            placeholder={'\uF002'}
            onChange={this.handleSearchChange}
            disabled={this.props.disabled} />
        </div>
        <div className="author col-md-4">
          <div className="author-name">
            {author}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Search;