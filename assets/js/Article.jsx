var React = require('react'),
    ArticleTitle = require('./ArticleTitle.jsx'),
    ArticleBanner = require('./ArticleBanner.jsx'),
    TagList = require('./TagList.jsx'),
    ArticleBody = require('./ArticleBody.jsx'),
    ArticleButton = require('./ArticleButton.jsx');

var ArticleStore = {
  "it-finally-works": {
    title: "it finally works",
    slug: "it-finally-works",
    banner: "/assets/img/bt_nes_controller.jpg",
    meta: {
      date: "05-03-2015",
      tags: [
        {
          slug: "nes",
          description: "NES system and games",
          name: "NES"
        },
        {
          slug: "bluetooth",
          description: "Bluetooth programming",
          name: "Bluetooth"
        },
        {
          slug: "arduino",
          description: "Arduino based programming",
          name: "Arduino"
        },
        {
          slug: "programming",
          description: "General programming",
          name: "Programming"
        },
        {
          slug: "hardware",
          description: "Hardware hacking",
          name: "Hardware"
        },
      ]
    },
    body: "Inspiration<br/><br/>A while back I purchased an Arduino, with limited knowledge of what I wanted to do with it. I then picked up an extremely overpriced breadboard and a spool of wire and started testing what I could do.<br/><br/>The first couple days were entertaining. I made a couple LEDs blink and played an awful rendition of a song on a terrible sounding speaker. After the simple experiments though, programming a device that I had little understanding of quickly became frustrating. I started trying some of the further tutorials, but had a lot less immediate success. I had almost no idea what I was doing, and had no clue how to debug or troubleshoot the issues I was having.<br/><br/>Naturally, I decided that I should just try and start on an actual project. That rather than try and continue learning the basics I should jump right in. Ordinarily I find I learn best this way, but this project was a good lesson in the value of following instructions.<br/><br/>Formulation<br/><br/>Enter the Bluetooth NES controller project. Step one was learning how an NES controller functioned. I looked around and found some interesting resources regarding the polling method that the NES uses. Starting with a finite state machine implementation, then a homework assignment with a little more information. (College computer science homework can be really good research material at times.)<br/><br/>I was pretty enthusiastic at this point. Despite not really understand the information that I had found, at least the information was available and I knew where some of it was. My lack of understanding really came to a head when it came time to try and program something the code that would interface with the controller. None of my attempts were close to working, and so I was back into research mode. In some ways luckily I found someone had written a NES controller library for the Arduino.<br/><br/>Misconceptions<br/><br/>I quickly downloaded it, unpacked it, and started looking through to see what I was doing wrong. My first programming mistake became obvious when I saw how minimal the code was. Being used to writing classes on top of classes and abstraction, I was not ready for programming in which my data store was a single byte. I spent a while with this very minimal code, but forcing myself to understand it was extremely beneficial in putting my mind into the proper state for programming for the Arduino.<br/><br/>Experimentation<br/><br/>With what I believed to be a much firmer grasp of what I was doing and how everything should work I sliced into my first controller wires. I did not want to destroy one of my original Nintendo brand NES controller, so I picked up a cheap reproduction and went to it. As most would likely expect, but to my surprise, nothing on the board in the controller and the individual wires were wafer thin and all different colors than the diagrams I had been researching.<br/><br/>I spent a lot of time trying to get a simple connection between the library I had found and the third-party controller. Stripping down tiny wires with the edge of a pair of scissors, trying to wrap tiny copper strands around less than cooperative wire that I cut way too large, I was pretty much stumbling in the dark. My impatience came back to haunt me here as I still had no way to know if my project was even working. (I had skipped the tutorials on sending serial data and the Serial Monitor.) So I tried a combination of leds and sending different sounds to the speaker for different buttons, but nothing I tried was giving me output that made sense.<br/><br/>Frustrated, I grabbed one of my Nintendo brand controllers and struck wires into the plug and ran them back to my Arduino. Unbelievably, the connected speaker began to make predictable sounds. After hearing the results I was quite relieved, but still feeling concerned of my overall lack of knowledge and that I did not understand why my other controller failed (I still am clueless).<br/><br/>Discouraged<br/><br/>It was a struggle to get the initial controller working, but with a minor victory under my belt I started looking in to the world of Bluetooth. At this point I was too far in over my head. I was able to get an inkling of what I might need to purchase and how the technology worked. Unfortunately I was still struggling with how the NES controller would work with the modules and how I would possible build the console half of this project. Completely overwhelmed and discouraged by my lack of understanding I gave up on the project. I was not sure I would pick it up again, but I knew I needed a break.<br/><br/>A while back I purchased an Arduino, with limited knowledge of what I wanted to do with it. I then picked up an extremely overpriced breadboard and a spool of wire and started testing what I could do.<br/><br/>The first couple days were entertaining. I made a couple LEDs blink and played an awful rendition of a song on a terrible sounding speaker. After the simple experiments though, programming a device that I had little understanding of quickly became frustrating. I started trying some of the further tutorials, but had a lot less immediate success. I had almost no idea what I was doing, and had no clue how to debug or troubleshoot the issues I was having.<br/><br/>Naturally, I decided that I should just try and start on an actual project. That rather than try and continue learning the basics I should jump right in. Ordinarily I find I learn best this way, but this project was a good lesson in the value of following instructions.<br/><br/>Formulation<br/><br/>Enter the Bluetooth NES controller project. Step one was learning how an NES controller functioned. I looked around and found some interesting resources regarding the polling method that the NES uses. Starting with a finite state machine implementation, then a homework assignment with a little more information. (College computer science homework can be really good research material at times.)<br/><br/>I was pretty enthusiastic at this point. Despite not really understand the information that I had found, at least the information was available and I knew where some of it was. My lack of understanding really came to a head when it came time to try and program something the code that would interface with the controller. None of my attempts were close to working, and so I was back into research mode. In some ways luckily I found someone had written a NES controller library for the Arduino.<br/><br/>Misconceptions<br/><br/>I quickly downloaded it, unpacked it, and started looking through to see what I was doing wrong. My first programming mistake became obvious when I saw how minimal the code was. Being used to writing classes on top of classes and abstraction, I was not ready for programming in which my data store was a single byte. I spent a while with this very minimal code, but forcing myself to understand it was extremely beneficial in putting my mind into the proper state for programming for the Arduino.<br/><br/>Experimentation<br/><br/>With what I believed to be a much firmer grasp of what I was doing and how everything should work I sliced into my first controller wires. I did not want to destroy one of my original Nintendo brand NES controller, so I picked up a cheap reproduction and went to it. As most would likely expect, but to my surprise, nothing on the board in the controller and the individual wires were wafer thin and all different colors than the diagrams I had been researching.<br/><br/>I spent a lot of time trying to get a simple connection between the library I had found and the third-party controller. Stripping down tiny wires with the edge of a pair of scissors, trying to wrap tiny copper strands around less than cooperative wire that I cut way too large, I was pretty much stumbling in the dark. My impatience came back to haunt me here as I still had no way to know if my project was even working. (I had skipped the tutorials on sending serial data and the Serial Monitor.) So I tried a combination of leds and sending different sounds to the speaker for different buttons, but nothing I tried was giving me output that made sense.<br/><br/>Frustrated, I grabbed one of my Nintendo brand controllers and struck wires into the plug and ran them back to my Arduino. Unbelievably, the connected speaker began to make predictable sounds. After hearing the results I was quite relieved, but still feeling concerned of my overall lack of knowledge and that I did not understand why my other controller failed (I still am clueless).<br/><br/>Discouraged<br/><br/>It was a struggle to get the initial controller working, but with a minor victory under my belt I started looking in to the world of Bluetooth. At this point I was too far in over my head. I was able to get an inkling of what I might need to purchase and how the technology worked. Unfortunately I was still struggling with how the NES controller would work with the modules and how I would possible build the console half of this project. Completely overwhelmed and discouraged by my lack of understanding I gave up on the project. I was not sure I would pick it up again, but I knew I needed a break."
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
    console.log("Render Article");
    var classes = "article-container" + ((this.props.active) ? " article-active" : "") + ((this.props.inactive) ? " article-inactive" : ""),
        tags = this.props.active ? this.state.meta.tags : [],
        body = this.props.active ? this.state.body : "";

    return (
      <div className={classes}>
        <ArticleTitle title={this.state.title} date={this.state.meta.date} />
        <ArticleBanner src={this.state.banner} alt={this.state.title} />
        <TagList tags={tags} />
        <ArticleBody body={body} />
        <div className="article-button-container">
          <ArticleButton title="R" slug={this.state.slug} />
          <div className="article-button-text">ead</div>
        </div>
      </div>
    );
  }
});

module.exports = Article;