var React = require('react'),
    _ = require('lodash');

var Search = React.createClass({
  onSearchChange: function() {
    this.handleSearchChange();
  },
  componentWillMount: function() {
    this.handleSearchChange = _.debounce(
      function() {
        this.props.onSearchUpdate(
          this.refs.searchBox.getDOMNode().value
        );
      }.bind(this),
      350
    );
  },
  shouldComponentUpdate: function(nextProps, nextState) {
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
            // value={this.props.searchString}
            placeholder={"\uF002"}
            onChange={this.onSearchChange}
            disabled={this.props.disabled} />
        </div>
      </div>
    );
  }

});

module.exports = Search;