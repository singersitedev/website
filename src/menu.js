import React from 'react';
import MobileMenu from './mobileMenu.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutMeClass: "menuElementUnselected menuElement hideMobile verticalCentre",
            upcomingEventsClass: "menuElementUnselected  menuElement hideMobile verticalCentre",
            musicAndVideosClass: "menuElementUnselected  menuElement hideMobile verticalCentre",
            photoGalleryClass: "menuElementUnselected  menuElement hideMobile verticalCentre",
            bookingInfoClass: "menuElementUnselected  menuElement hideMobile verticalCentre",
            contactMeClass: "menuElementUnselected  menuElement displayNoneMobile verticalCentre", //instead of hidden, is replaced
            hamburgerMenuImage: "img/hamburgerToOpen.png"
        };
        this.onMenuClick = this.onMenuClick.bind(this);
        this.homeClick = this.homeClick.bind(this);
        this.aboutMeClick = this.aboutMeClick.bind(this);
        this.upcomingEventsClick = this.upcomingEventsClick.bind(this);
        this.musicAndVideosClick = this.musicAndVideosClick.bind(this);
        this.photoGalleryClick = this.photoGalleryClick.bind(this);
        this.bookingInfoClick = this.bookingInfoClick.bind(this);
        this.contactMeClick = this.contactMeClick.bind(this);
        this.hamburgerMenuClick = this.hamburgerMenuClick.bind(this);
        this.mobileMenuEvent = this.mobileMenuEvent.bind(this);
        console.log(this.props);
    }

    mobileMenuEvent(mobileEvent) {
        this.setState({
            hamburgerMenuImage: "img/hamburgerToOpen.png"
        });
        this.props.setCurrentPage(mobileEvent);
    }

    onMenuClick(selectedProperty) {
        let stateObject = new Object({
            aboutMeClass: "menuElementUnselected menuElement hideMobile verticalCentre",
            upcomingEventsClass: "menuElementUnselected  menuElement hideMobile verticalCentre",
            musicAndVideosClass: "menuElementUnselected  menuElement hideMobile verticalCentre",
            photoGalleryClass: "menuElementUnselected  menuElement hideMobile verticalCentre",
            bookingInfoClass: "menuElementUnselected  menuElement hideMobile verticalCentre",
            contactMeClass: "menuElementUnselected  menuElement displayNoneMobile verticalCentre", //instead of hidden, is replaced
            hamburgerMenuImage: "img/hamburgerToOpen.png"
        });
        switch(selectedProperty) {
            case("home"):
                break;
            case("aboutMe"):
                stateObject.aboutMeClass = "menuElementSelected menuElement hideMobile verticalCentre";
                break;
            case("upcomingEvents"):
                stateObject.upcomingEventsClass = "menuElementSelected menuElement hideMobile verticalCentre";
                break;
            case("musicAndVideos"):
                stateObject.musicAndVideosClass = "menuElementSelected menuElement hideMobile verticalCentre";
                break;
            case("photoGallery"):
                stateObject.photoGalleryClass = "menuElementSelected menuElement hideMobile verticalCentre";
                break;
            case("bookingInfo"):
                stateObject.bookingInfoClass = "menuElementSelected menuElement hideMobile verticalCentre";;
                break;
            case("contactMe"):
                stateObject.contactMeClass = "menuElementSelected menuElement displayNoneMobile verticalCentre";
                break;
            case ("hamburgerMenu"):
                if(this.state.hamburgerMenuImage == "img/hamburgerToOpen.png")
                    stateObject.hamburgerMenuImage = "img/hamburgerToClose.png";
                break;
        }
        this.setState({aboutMeClass: stateObject.aboutMeClass,
            upcomingEventsClass: stateObject.upcomingEventsClass,
            musicAndVideosClass: stateObject.musicAndVideosClass,
            photoGalleryClass: stateObject.photoGalleryClass,
            bookingInfoClass: stateObject.bookingInfoClass,
            contactMeClass: stateObject.contactMeClass,
            hamburgerMenuImage: stateObject.hamburgerMenuImage
        });
        this.props.setCurrentPage(selectedProperty);
    }

    homeClick() {
        this.onMenuClick("home");
    }

    aboutMeClick() {
        this.onMenuClick("aboutMe");
    }

    upcomingEventsClick() {
        this.onMenuClick("upcomingEvents");
    }

    musicAndVideosClick() {
        this.onMenuClick("musicAndVideos");
    }

    photoGalleryClick() {
        this.onMenuClick("photoGallery");
    }

    bookingInfoClick() {
        this.onMenuClick("bookingInfo");
    }

    contactMeClick() {
        this.onMenuClick("contactMe");
    }

    hamburgerMenuClick() {
        this.onMenuClick("hamburgerMenu");
    }

    render() {
        return (
            <div id="menuContainer">
            <div id="menu">
                <div id="menuHomeArea" className="menuFlexElement flexColumn" onClick={this.homeClick}>
                    <div id="name">Emily Canning</div>
                    <div id="occupation">Professional Singer</div>
                </div>
                <div id="menuMainArea" className="menuFlexElement flexColumn">
                    <div id="menuMainAreaTop" className="menuFlexElement justifyRight">
                        <div id="twitterDiv" className="menuElement socialMediaIcon">
                            <a href="https://www.twitter.com/"><img id="twitterLogo" className="topMenuImage" src="img/twitterLogo.png" alt="twitter"></img></a>
                        </div>
                        <div id="linkedInDiv" className="menuElement socialMediaIcon">
                            <a href="https://www.linkedin.com/"><img id="linkedInLogo" className="topMenuImage" src="img/linkedInLogo.png" alt="linkedIn"></img></a>
                        </div>
                        <div id="facebookDiv" className="menuElement socialMediaIcon">
                            <a href="https://www.facebook.com/"><img id="facebookLogo" className="topMenuImage" src="img/facebookLogo.png" alt="facebook"></img></a>
                        </div>
                    </div>
                    <div id="menuMainAreaBottom" className="menuFlexElement">
                        <div id="aboutMe" className={this.state.aboutMeClass} onClick={this.aboutMeClick}>About Me</div>
                        <div id="upcomingEvents" className={this.state.upcomingEventsClass} onClick={this.upcomingEventsClick}>Upcoming Events</div>
                        <div id="musicAndVideos" className={this.state.musicAndVideosClass} onClick={this.musicAndVideosClick}>Music and Videos</div>
                        <div id="photoGallery" className={this.state.photoGalleryClass} onClick={this.photoGalleryClick}>Photo Gallery</div>
                        <div id="bookingInfo" className={this.state.bookingInfoClass} onClick={this.bookingInfoClick}>Booking Info</div>
                        <div id="contactMe" className={this.state.contactMeClass} onClick={this.contactMeClick}>Contact Me</div>
                        <div id="hamburgerMenu" className="menuElement mobileUnhide" onClick={this.hamburgerMenuClick}>
                            <img id="hamburgerMenuImage" src={this.state.hamburgerMenuImage} alt="menu"/>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu setClass={this.props.isMobileHidden} setCurrentPage={this.mobileMenuEvent}/>
            </div>
        );
    }
};

export default Menu;