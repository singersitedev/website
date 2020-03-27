import React from 'react';

class ContactMe extends React.Component {

    render() {
        return(
            <div id="contactMePage" className="contentMain">
            <div className="contentText">Contact me at: <span id="contactEmail">address@gmail.com</span><br/><br/>
              I respond to messages every day at 8 am and 8 pm</div>
          </div>
        );
    }
};

export default ContactMe; 