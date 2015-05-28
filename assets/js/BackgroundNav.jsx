var React = require('react')
    NavList = require('./NavList.jsx');

var BackgroundNav = React.createClass({
  render: function() {
    return (
      <div className="nav-block-background">
        <NavList compileHandler={this.props.compileHandler} />
      </div>
    );
  }

});

module.exports = BackgroundNav;