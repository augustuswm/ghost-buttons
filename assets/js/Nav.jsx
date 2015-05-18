var React = require('react'),
    NavList = require('./NavList.jsx');

var Nav = React.createClass({
  render: function() {
    return (
      <div className="nav-block">
        <div className="nav-name">
          <span className="nav-A"></span>
        </div>
        <NavList />
      </div>      
    );
  }

});

module.exports = Nav;