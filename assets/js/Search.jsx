var React = require('react');

var Search = React.createClass({

  render: function() {
    return (
      <div>
        <input className="search-box" type="text" />
      </div>
    );
  }

});

module.exports = Search;