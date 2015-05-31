var React = require('react')
    NavList = require('./NavList.jsx');

var BackgroundNav = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.linkList !== nextProps.linkList;
  },
  render: function() {
    console.log("Render BackgroundNav");
    return (
      <div className="nav-block-background">
        <NavList linkList={this.props.linkList} />
      </div>
    );
  }

});

module.exports = BackgroundNav;