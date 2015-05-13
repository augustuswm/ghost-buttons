var React = require('react'),
    Immutable = require('Immutable'),
    ArticleButtonList = require('./ArticleButtonList.jsx'),
    Search = require('./Search.jsx');

var Sidebar = React.createClass({
  getInitialState: function() {
    return Immutable.Map({
      articles: Immutable.List([
        { id: 1, slug: "post-one", title: "First Article"},
        { id: 2, slug: "post-two", title: "Second Article"},
        { id: 3, slug: "post-three", title: "Third Article"},
        { id: 4, slug: "post-four", title: "Fourth Article"},
        { id: 5, slug: "post-five", title: "Fifth Article"}
      ])
    });
  },
  render: function() {
    return (
      <div>
        <Search />
        <ArticleButtonList articles={this.state.get('articles')} />
      </div>
    );
  }
});

module.exports = Sidebar;