var React = require('react')
    NavList = require('./NavList.jsx');

var BackgroundNav = React.createClass({
  render: function() {
    return (
      <div className="nav-block-background">
        <NavList linkList={this.props.linkList} />
      </div>
    );
  }

});

module.exports = BackgroundNav;