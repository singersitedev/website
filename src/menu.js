import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div id="menu" className="menu">
                <div id="topMenu">
                    <div id="name" className="menuItem">Emily Canning</div>
                    <div id="occupation">Professional Singer</div>
                </div>
                <div id="mainMenu">
                    <div id="aboutMe" className="menuItem">About Me</div>
                    <div id="upcomingEvents" className="menuItem">Upcoming Events</div>
                    <div id="musicAndVideos" className="menuItem">Music &amp; Videos</div>
                    <div id="bookingInfo" className="menuItem">Booking Info</div>
                    <div id="contactMe" className="menuItem">Contact Me</div>
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
        );
    }
}

export default Menu;