var React = require('react'),
    Magazine = require('./Magazine.jsx');

var Home = React.createClass({
  getInitialState: function() {
    return {
      selectedArtile: {
        title: "Here is a big title",
        meta: {
          date: "01-01-2001",
          tags: [
            {
              slug: "coop-gaming",
              description: "All about cooperative gaming",
              name: "Coop"
            }
          ]
        },
        body: "This is some body copy."
      }
    };
  },
  render: function() {
    return (
      <div>
        <h1>This is the introduction text</h1>
        <Magazine params={this.props.params} />
      </div>
    );
  }
});

module.exports = Home;