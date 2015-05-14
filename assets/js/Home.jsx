var React = require('react'),
    Magazine = require('./Magazine.jsx');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Magazine slugList={this.props.slugList} />
      </div>
    );
  }
});

module.exports = Home;