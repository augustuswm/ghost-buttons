var React = require('react');

var Search = React.createClass({
  handleSearchChange: function() {
    this.props.onSearchUpdate(
      this.refs.searchBox.getDOMNode().value
    );
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log(this.props.disabled, nextProps.disabled);
    return this.props.disabled !== nextProps.disabled ||
           this.props.searchString !== nextProps.searchString;
  },
  render: function() {
    console.log("Render Search");
    var searchClasses = [
          "search-box",
          this.props.searchString ? "has-active-search" : ""
        ].join(" ");

    return (
      <div className="header-container">
        <div className="search-container">
          <input
            className={searchClasses}
            ref="searchBox"
            type="text"
            value={this.props.searchString}
            placeholder={"\uF002"}
            onChange={this.handleSearchChange}
            disabled={this.props.disabled} />
        </div>
      </div>
    );
  }

});

module.exports = Search;