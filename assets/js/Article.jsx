var React = require('react'),
    ArticleTitle = require('./ArticleTitle.jsx'),
    ArticleBanner = require('./ArticleBanner.jsx'),
    TagList = require('./TagList.jsx'),
    ArticleBody = require('./ArticleBody.jsx'),
    ArticleButton = require('./ArticleButton.jsx');

var ArticleStore = {
  "post-one": {
    title: "This is the first post",
    slug: "post-one",
    banner: "/assets/img/bt_nes_controller.jpg",
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
    body: "This is some body copy all about the first post on the blog."
  },
  "post-two": {
    title: "Another post",
    slug: "post-two",
    banner: "/assets/img/bt_nes_controller.jpg",
    meta: {
      date: "01-01-2099",
      tags: [
        {
          slug: "not-coop-gaming",
          description: "Nothing about cooperative gaming",
          name: "Not Coop"
        }
      ]
    },
    body: "This is another post, likely the second one made."
  }
};

var Article = React.createClass({
  getEmptyState: function() {
    return {
      title: "",
      slug: "",
      meta: {
        date: "",
        tags: []
      },
      body: ""
    };
  },
  getInitialState: function() {
    return ArticleStore[this.props.slug] || this.getEmptyState();
  },
  render: function() {
    var classes = "article-container" + ((this.props.active) ? " article-active" : ""),
        tags = this.props.active ? <TagList tags={this.state.meta.tags} /> : "",
        body = this.props.active ? <ArticleBody body={this.state.body} /> : "";

    return (
      <div className={classes}>
        <ArticleTitle title={this.state.title} date={this.state.meta.date} />
        <ArticleBanner src={this.state.banner} alt={this.state.title} />
        {tags}
        {body}
        <div className="article-button-container">
          <ArticleButton title="R" slug={this.state.slug} />
          <div className="article-button-text">ead</div>
        </div>
      </div>
    );
  }
});

module.exports = Article;