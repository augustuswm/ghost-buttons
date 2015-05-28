var React = require('react'),
    NavList = require('./NavList.jsx');

var Nav = React.createClass({
  render: function() {
    return (
      <div className="nav-block">
        <div className="nav-name" onClick={this.props.toggleNav}>
          <span className="nav-A"></span>
        </div>
        <NavList compileHandler={this.props.compileHandler} />
      </div>      
    );
  }

});

module.exports = Nav;