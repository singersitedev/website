import React from 'react';
import Home from './home.js';
import AboutMe from './aboutMe.js';
import UpcomingEvents from './upcomingEvents.js';
import MusicAndVideos from './musicAndVideos.js';
import PhotoGallery from './photoGallery.js';
import BookingInfo from './bookingInfo.js';
import ContactMe from './contactMe.js';

class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.returnCurrentPage = this.returnCurrentPage.bind(this);
    }

    returnCurrentPage(currentPage) {
        this.props.setCurrentPage(currentPage);
    }

    render() {
        switch(this.props.currentPage) {
            case("home"):
                return(
                    <div id="pageContainer">
                        <Home/>
                    </div>
                );
            case("aboutMe"):
                return(
                    <div id="pageContainer">
                        <AboutMe/>
                    </div>
                );
                break;
            case("upcomingEvents"):
                return(
                    <div id="pageContainer">
                        <UpcomingEvents/>
                    </div>
                );
            case("musicAndVideos"):
                return(
                    <div id="pageContainer">
                        <MusicAndVideos/>
                    </div>
                );
            case("photoGallery"):
                return(
                    <div id="pageContainer">
                        <PhotoGallery/>
                    </div>
                );
            case("bookingInfo"):
                return(
                    <div id="pageContainer">
                        <BookingInfo/>
                    </div>
                );
            case("contactMe"):
                return(
                    <div id="pageContainer">
                        <ContactMe/>
                    </div>
                );
            default:
                return(
                    <div id="pageContainer">
                        <Home/>
                    </div>
                );
        }
    }
};

export default PageContainer;