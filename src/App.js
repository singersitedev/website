import React from 'react';
import './App.css';

var cover = null;
var aboutMe = null;
var upcomingEvents = null;
var musicAndVideos = null;
var bookingInfo = null;
var contactMe = null;
var isHome = true;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home"
    };
    this.nameClick = this.nameClick.bind(this);
    this.aboutMeClick = this.aboutMeClick.bind(this);
    this.upcomingEventsClick = this.upcomingEventsClick.bind(this);
    this.musicAndVideosClick = this.musicAndVideosClick.bind(this);
    this.bookingInfoClick = this.bookingInfoClick.bind(this);
    this.contactMeClick = this.contactMeClick.bind(this);
  }

  componentDidUpdate() {
    if(isHome) {
      let ratioNum = null;
      ratioNum = document.getElementById("home").clientWidth / document.getElementById("home").clientHeight * 100;
      if(ratioNum >= 100)
        cover[0].setAttribute("src", "./img/cover.jpg");
      else if(ratioNum >= 60)
        cover[0].setAttribute("src", "./img/cover3.png");
      else
        cover[0].setAttribute("src", "./img/cover2.png");
    }
  }

  nameClick() {
    switch(this.state.currentPage) {
      case "aboutMe":
        aboutMe.style.color = "white";
        break;
      case "upcomingEvents":
        upcomingEvents.style.color = "white";
        break;
      case "musicAndVideos":
        musicAndVideos.style.color = "white";
        break;
      case "bookingInfo":
        bookingInfo.style.color = "white";
        break;
      case "contactMe":
        contactMe.style.color = "white";
        break;
    }
    this.setState({currentPage: "home"});
    isHome = true;
  }

  aboutMeClick() {
    switch(this.state.currentPage) {
      case "aboutMe":
        aboutMe.style.color = "white";
        break;
      case "upcomingEvents":
        upcomingEvents.style.color = "white";
        break;
      case "musicAndVideos":
        musicAndVideos.style.color = "white";
        break;
      case "bookingInfo":
        bookingInfo.style.color = "white";
        break;
      case "contactMe":
        contactMe.style.color = "white";
        break;
    }
    this.setState({currentPage: "aboutMe"});
    isHome = false;
    aboutMe.style.color = "#25a3a4";
  }

  upcomingEventsClick() {
    switch(this.state.currentPage) {
      case "aboutMe":
        aboutMe.style.color = "white";
        break;
      case "upcomingEvents":
        upcomingEvents.style.color = "white";
        break;
      case "musicAndVideos":
        musicAndVideos.style.color = "white";
        break;
      case "bookingInfo":
        bookingInfo.style.color = "white";
        break;
      case "contactMe":
        contactMe.style.color = "white";
        break;
    }
    this.setState({currentPage: "upcomingEvents"});
    isHome = false;
    upcomingEvents.style.color = "#25a3a4";
  }

  musicAndVideosClick() {
    switch(this.state.currentPage) {
      case "aboutMe":
        aboutMe.style.color = "white";
        break;
      case "upcomingEvents":
        upcomingEvents.style.color = "white";
        break;
      case "musicAndVideos":
        musicAndVideos.style.color = "white";
        break;
      case "bookingInfo":
        bookingInfo.style.color = "white";
        break;
      case "contactMe":
        contactMe.style.color = "white";
        break;
    }
    this.setState({currentPage: "musicAndVideos"});
    isHome = false;
    musicAndVideos.style.color = "#25a3a4";
  }

  bookingInfoClick() {
    switch(this.state.currentPage) {
      case "aboutMe":
        aboutMe.style.color = "white";
        break;
      case "upcomingEvents":
        upcomingEvents.style.color = "white";
        break;
      case "musicAndVideos":
        musicAndVideos.style.color = "white";
        break;
      case "bookingInfo":
        bookingInfo.style.color = "white";
        break;
      case "contactMe":
        contactMe.style.color = "white";
        break;
    }
    this.setState({currentPage: "bookingInfo"});
    isHome = false;
    bookingInfo.style.color = "#25a3a4";
  }

  contactMeClick() {
    switch(this.state.currentPage) {
      case "aboutMe":
        aboutMe.style.color = "white";
        break;
      case "upcomingEvents":
        upcomingEvents.style.color = "white";
        break;
      case "musicAndVideos":
        musicAndVideos.style.color = "white";
        break;
      case "bookingInfo":
        bookingInfo.style.color = "white";
        break;
      case "contactMe":
        contactMe.style.color = "white";
        break;
    }
    this.setState({currentPage: "contactMe"});
    isHome = false;
    contactMe.style.color = "#25a3a4";
  }

  componentDidMount() {
    cover = document.getElementsByClassName("cover");
    aboutMe = document.getElementById("aboutMe");
    upcomingEvents = document.getElementById("upcomingEvents");
    musicAndVideos = document.getElementById("musicAndVideos");
    bookingInfo = document.getElementById("bookingInfo");
    contactMe = document.getElementById("contactMe");
    if(isHome === true) {
      let ratioNum = document.getElementById("home").clientWidth / document.getElementById("home").clientHeight * 100;
      if(ratioNum >= 100) {}
      else if(ratioNum >= 60)
        cover[0].setAttribute("src", "./img/cover3.png");
      else
        cover[0].setAttribute("src", "./img/cover2.png");
    }
    
    this.setState({
      currentPage: "home"
    });
      
    window.addEventListener("resize", function() {
      if(isHome === false)
        return;
      let ratioNum = null;
      ratioNum = document.getElementById("home").clientWidth / document.getElementById("home").clientHeight * 100;
      if(ratioNum >= 100)
        cover[0].setAttribute("src", "./img/cover.jpg");
      else if(ratioNum >= 60)
        cover[0].setAttribute("src", "./img/cover3.png");
      else
        cover[0].setAttribute("src", "./img/cover2.png");
    });
  }

  render() {
    if(this.state.currentPage === "home") {
      return (
        <div className="App">
          <div id="menu" className="menu">
            <div id="topMenu">
              <div id="name" className="menuItem" onClick={this.nameClick}>Emily Canning</div>
              <div id="occupation">Professional Singer</div>
            </div>
            <div id="mainMenu">
              <div id="aboutMe" className="menuItem" onClick={this.aboutMeClick}>About Me</div>
              <div id="upcomingEvents" className="menuItem" onClick={this.upcomingEventsClick}>Upcoming Events</div>
              <div id="musicAndVideos" className="menuItem" onClick={this.musicAndVideosClick}>Music &amp; Videos</div>
              <div id="bookingInfo" className="menuItem" onClick={this.bookingInfoClick}>Booking Info</div>
              <div id="contactMe" className="menuItem" onClick={this.contactMeClick}>Contact Me</div>
            </div>
            <div id="menuBottom">
              <div id="twitterDiv">
                <a href="https://www.twitter.com/"><img id="twitterLogo" className="menuBottomElement" src="img/twitterLogo.png" alt="twitter"></img></a>
              </div>
              <div id="linkedInDiv">
                <a href="https://www.linkedin.com/"><img id="linkedInLogo" className="menuBottomElement" src="img/linkedInLogo.png" alt="linkedIn"></img></a>
              </div>
              <div id="facebookDiv">
                <a href="https://www.facebook.com/"><img id="facebookLogo" className="menuBottomElement" src="img/facebookLogo.png" alt="facebook"></img></a>
              </div>
            </div>
          </div>
          <div id="home" className="contentHome">
            <img className="cover" src="./img/cover.jpg"></img>
          </div>
        </div>
      );
    }
    else if(this.state.currentPage === "aboutMe") {
      return (
        <div className="App">
          <div id="menu" className="menu">
            <div id="topMenu">
              <div id="name" className="menuItem" onClick={this.nameClick}>Emily Canning</div>
              <div id="occupation">Professional Singer</div>
            </div>
            <div id="mainMenu">
                <div id="aboutMe" className="menuItem" onClick={this.aboutMeClick}>About Me</div>
                <div id="upcomingEvents" className="menuItem" onClick={this.upcomingEventsClick}>Upcoming Events</div>
                <div id="musicAndVideos" className="menuItem" onClick={this.musicAndVideosClick}>Music &amp; Videos</div>
                <div id="bookingInfo" className="menuItem" onClick={this.bookingInfoClick}>Booking Info</div>
                <div id="contactMe" className="menuItem" onClick={this.contactMeClick}>Contact Me</div>
            </div>
            <div id="menuBottom">
                <div id="twitterDiv">
                    <a href="https://www.twitter.com/"><img id="twitterLogo" className="menuBottomElement" src="img/twitterLogo.png" alt="twitter"></img></a>
                </div>
                <div id="linkedInDiv">
                    <a href="https://www.linkedin.com/"><img id="linkedInLogo" className="menuBottomElement" src="img/linkedInLogo.png" alt="linkedIn"></img></a>
                </div>
                <div id="facebookDiv">
                    <a href="https://www.facebook.com/"><img id="facebookLogo" className="menuBottomElement" src="img/facebookLogo.png" alt="facebook"></img></a>
                </div>
            </div>
          </div>
          <div id="aboutMe" className="contentMain">
            <img id="aboutMeImage" src="./img/aboutMe.jpg"></img>
            <div id="aboutMeText" className="contentText">The Ayala Museum is a museum in Makati, Metro Manila, Philippines. It is located in Ayala Center adjacent to Greenbelt mall and is run 
            privately by the Ayala Foundation. This six-storey edifice houses ethnographic and archaeological exhibits on Filipino culture, art, and history. Since its establishment 
            in 1967,[2] the museum has been committed to showcasing overseas collections and situating contemporary Philippine art in the global arena in a two-way highway of mutual cooperation 
            and exchange with local and international associates.[3]<br /><br />Envisioned during the 1950s by Philippine abstract painter Fernando Zóbel de Ayala y Montojo, as a museum of Philippine 
            history and iconography, the Ayala Museum was established in 1967 as a project of the Filipinas Foundation, now known as the Ayala Foundation.[2] The museum was housed at the Insular 
            Life Building and was transferred to[4] the old Makati Stock Exchange 
            Building.[5] The old building was designed by National Artist Leandro Locsin.[4]</div>
          </div>
        </div>
      );
    }
    else if(this.state.currentPage === "upcomingEvents") {
      return (
        <div className="App">
          <div id="menu" className="menu">
            <div id="topMenu">
                <div id="name" className="menuItem" onClick={this.nameClick}>Emily Canning</div>
                <div id="occupation">Professional Singer</div>
            </div>
            <div id="mainMenu">
                <div id="aboutMe" className="menuItem" onClick={this.aboutMeClick}>About Me</div>
                <div id="upcomingEvents" className="menuItem" onClick={this.upcomingEventsClick}>Upcoming Events</div>
                <div id="musicAndVideos" className="menuItem" onClick={this.musicAndVideosClick}>Music &amp; Videos</div>
                <div id="bookingInfo" className="menuItem" onClick={this.bookingInfoClick}>Booking Info</div>
                <div id="contactMe" className="menuItem" onClick={this.contactMeClick}>Contact Me</div>
            </div>
            <div id="menuBottom">
                <div id="twitterDiv">
                    <a href="https://www.twitter.com/"><img id="twitterLogo" className="menuBottomElement" src="img/twitterLogo.png" alt="twitter"></img></a>
                </div>
                <div id="linkedInDiv">
                    <a href="https://www.linkedin.com/"><img id="linkedInLogo" className="menuBottomElement" src="img/linkedInLogo.png" alt="linkedIn"></img></a>
                </div>
                <div id="facebookDiv">
                    <a href="https://www.facebook.com/"><img id="facebookLogo" className="menuBottomElement" src="img/facebookLogo.png" alt="facebook"></img></a>
                </div>
            </div>
          </div>
          <div id="upcomingEvents" className="contentMain">
            <div className="upcomingEvent contentText">
              <div className="eventDate">Sept 21, 2019, 9:00pm</div>
              <img className="eventImage" src="https://guitarwolf.net/wp/wp-content/uploads/2019/08/1013-1-150x150.jpg"></img>
              <div className="eventName">Emily &amp; Gordon Dance Battle</div>
              <div className="eventLocation">Gage Park, Brampton</div>
              <div className="eventLink"><a href="https://www.google.ca/">More Information</a></div>
            </div>
            <div className="upcomingEvent contentText">
              <div className="eventDate">Sept 21, 2019, 9:00pm</div>
              <img className="eventImage" src="https://guitarwolf.net/wp/wp-content/uploads/2019/08/1013-1-150x150.jpg"></img>
              <div className="eventName">Emily &amp; Gordon Dance Battle</div>
              <div className="eventLocation">Gage Park, Brampton</div>
              <div className="eventLink"><a href="https://www.google.ca/">More Information</a></div>
            </div>
            <div className="upcomingEvent contentText">
              <div className="eventDate">Sept 21, 2019, 9:00pm</div>
              <img className="eventImage" src="https://guitarwolf.net/wp/wp-content/uploads/2019/08/1013-1-150x150.jpg"></img>
              <div className="eventName">Emily &amp; Gordon Dance Battle</div>
              <div className="eventLocation">Gage Park, Brampton</div>
              <div className="eventLink"><a href="https://www.google.ca/">More Information</a></div>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.currentPage === "musicAndVideos") {
      return (
        <div className="App">
          <div id="menu" className="menu">
            <div id="topMenu">
                <div id="name" className="menuItem" onClick={this.nameClick}>Emily Canning</div>
                <div id="occupation">Professional Singer</div>
            </div>
            <div id="mainMenu">
                <div id="aboutMe" className="menuItem" onClick={this.aboutMeClick}>About Me</div>
                <div id="upcomingEvents" className="menuItem" onClick={this.upcomingEventsClick}>Upcoming Events</div>
                <div id="musicAndVideos" className="menuItem" onClick={this.musicAndVideosClick}>Music &amp; Videos</div>
                <div id="bookingInfo" className="menuItem" onClick={this.bookingInfoClick}>Booking Info</div>
                <div id="contactMe" className="menuItem" onClick={this.contactMeClick}>Contact Me</div>
            </div>
            <div id="menuBottom">
                <div id="twitterDiv">
                    <a href="https://www.twitter.com/"><img id="twitterLogo" className="menuBottomElement" src="img/twitterLogo.png" alt="twitter"></img></a>
                </div>
                <div id="linkedInDiv">
                    <a href="https://www.linkedin.com/"><img id="linkedInLogo" className="menuBottomElement" src="img/linkedInLogo.png" alt="linkedIn"></img></a>
                </div>
                <div id="facebookDiv">
                    <a href="https://www.facebook.com/"><img id="facebookLogo" className="menuBottomElement" src="img/facebookLogo.png" alt="facebook"></img></a>
                </div>
            </div>
          </div>
          <div id="musicAndVideos" className="contentMain">
            <div className="videoContainer">
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            <div className="videoTitle contentText">LIVE IN BRAMPTON</div>
            <iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.currentPage === "bookingInfo") {
      return (
        <div className="App">
          <div id="menu" className="menu">
            <div id="topMenu">
                <div id="name" className="menuItem" onClick={this.nameClick}>Emily Canning</div>
                <div id="occupation">Professional Singer</div>
            </div>
            <div id="mainMenu">
                <div id="aboutMe" className="menuItem" onClick={this.aboutMeClick}>About Me</div>
                <div id="upcomingEvents" className="menuItem" onClick={this.upcomingInfoClick}>Upcoming Events</div>
                <div id="musicAndVideos" className="menuItem" onClick={this.musicAndVideosClick}>Music &amp; Videos</div>
                <div id="bookingInfo" className="menuItem" onClick={this.bookingInfoClick}>Booking Info</div>
                <div id="contactMe" className="menuItem" onClick={this.contactMeClick}>Contact Me</div>
            </div>
            <div id="menuBottom">
                <div id="twitterDiv">
                    <a href="https://www.twitter.com/"><img id="twitterLogo" className="menuBottomElement" src="img/twitterLogo.png" alt="twitter"></img></a>
                </div>
                <div id="linkedInDiv">
                    <a href="https://www.linkedin.com/"><img id="linkedInLogo" className="menuBottomElement" src="img/linkedInLogo.png" alt="linkedIn"></img></a>
                </div>
                <div id="facebookDiv">
                    <a href="https://www.facebook.com/"><img id="facebookLogo" className="menuBottomElement" src="img/facebookLogo.png" alt="facebook"></img></a>
                </div>
            </div>
          </div>
          <div id="bookingInfo" className="contentMain">
            <div className="sectionName">Booking Info</div>
          </div>
        </div>
      );
    }
    else if(this.state.currentPage === "contactMe") {
      return (
        <div className="App">
          <div id="menu" className="menu">
            <div id="topMenu">
                <div id="name" className="menuItem" onClick={this.nameClick}>Emily Canning</div>
                <div id="occupation">Professional Singer</div>
            </div>
            <div id="mainMenu">
                <div id="aboutMe" className="menuItem" onClick={this.aboutMeClick}>About Me</div>
                <div id="upcomingEvents" className="menuItem" onClick={this.upcomingEventsClick}>Upcoming Events</div>
                <div id="musicAndVideos" className="menuItem" onClick={this.musicAndVideosClick}>Music &amp; Videos</div>
                <div id="bookingInfo" className="menuItem" onClick={this.bookingInfoClick}>Booking Info</div>
                <div id="contactMe" className="menuItem" onClick={this.contactMeClick}>Contact Me</div>
            </div>
            <div id="menuBottom">
                <div id="twitterDiv">
                    <a href="https://www.twitter.com/"><img id="twitterLogo" className="menuBottomElement" src="img/twitterLogo.png" alt="twitter"></img></a>
                </div>
                <div id="linkedInDiv">
                    <a href="https://www.linkedin.com/"><img id="linkedInLogo" className="menuBottomElement" src="img/linkedInLogo.png" alt="linkedIn"></img></a>
                </div>
                <div id="facebookDiv">
                    <a href="https://www.facebook.com/"><img id="facebookLogo" className="menuBottomElement" src="img/facebookLogo.png" alt="facebook"></img></a>
                </div>
            </div>
          </div>
          <div id="contactMe" className="contentMain">
            <div className="sectionName">Contact Me</div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <h1>ERROR</h1>
        </div>
      );
    }
  }
};

/*window.onload = function() {
  if(!this.getCurrentPage() === "home") {
    let ratioNum = document.getElementById("home").clientWidth / document.getElementById("home").clientHeight * 100;
    if(ratioNum >= 100) {}
    else if(ratioNum >= 60)
      cover[0].setAttribute("src", "./img/cover3.png");
    else
      cover[0].setAttribute("src", "./img/cover2.png");
  }
  name = document.getElementById("name");
  aboutMe = document.getElementById("aboutMe");
  upcomingEvents = document.getElementById("upcomingEvents");
  musicAndVideos = document.getElementById("musicAndVideos");
  bookingInfo = document.getElementById("bookingInfo");
  contactMe = document.getElementById("contactMe");
    
  name.addEventListener("click", function() {
    window.pageComponent.setCurrentPage("home");
  });
  aboutMe.addEventListener("click", function() {
    window.pageComponent.setCurrentPage("aboutMe");
  });
  upcomingEvents.addEventListener("click", function() {
    window.pageComponent.setCurrentPage("upcomingEvents");
  });
  musicAndVideos.addEventListener("click", function() {
    window.pageComponent.setCurrentPage("musicAndVideos");
  });
  bookingInfo.addEventListener("click", function() {
    window.pageComponent.setCurrentPage("bookingInfo");
  });
  contactMe.addEventListener("click", function() {
    window.pageComponent.setCurrentPage("contactMe");
  });
}*/

export default App;
