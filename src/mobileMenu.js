import React from 'react';

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.aboutMeClick = this.aboutMeClick.bind(this);
        this.upcomingEventsClick = this.upcomingEventsClick.bind(this);
        this.musicAndVideosClick = this.musicAndVideosClick.bind(this);
        this.photoGalleryClick = this.photoGalleryClick.bind(this);
        this.bookingInfoClick = this.bookingInfoClick.bind(this);
        this.contactMeClick = this.contactMeClick.bind(this);
    }

    aboutMeClick() {
        this.props.setCurrentPage("aboutMe");
    }

    upcomingEventsClick() {
        this.props.setCurrentPage("upcomingEvents");
    }

    musicAndVideosClick() {
        this.props.setCurrentPage("musicAndVideos");
    }

    photoGalleryClick() {
        this.props.setCurrentPage("photoGallery");
    }

    bookingInfoClick() {
        this.props.setCurrentPage("bookingInfo");
    }

    contactMeClick() {
        this.props.setCurrentPage("contactMe");
    }

    render() {
        return(
            <div id="mobileMenu" className={this.props.setClass}>
                <div id="mobileMenuAboutMe" className="mobileMenuElement" onClick={this.aboutMeClick}>About Me</div>
                <div id="mobileMenuUpcomingEvents" className="mobileMenuElement" onClick={this.upcomingEventsClick}>Upcoming Events</div>
                <div id="mobileMenuMusicAndVideos" className="mobileMenuElement" onClick={this.musicAndVideosClick}>Music and Videos</div>
                <div id="mobileMenuPhotoGallery" className="mobileMenuElement" onClick={this.photoGalleryClick}>Photo Gallery</div>
                <div id="mobileMenuBookingInfo" className="mobileMenuElement" onClick={this.bookingInfoClick}>Booking Info</div>
                <div id="mobileMenuContactMe" className="mobileMenuElement" onClick={this.contactMeClick}>Contact Me</div>
            </div>
        );
    }
};

export default MobileMenu;