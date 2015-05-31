var React = require('react'),
    NavList = require('./NavList.jsx');
    
var Nav = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.linkList !== nextProps.linkList;
  },
  render: function() {
    console.log("Render Nav");
    return (
      <div className="nav-block">
        <div className="nav-name" onClick={this.props.toggleNav}>
          <span className="nav-A"></span>
        </div>
        <NavList linkList={this.props.linkList} />
      </div>      
    );
  }

});

module.exports = Nav;