import React from 'react';

class UpcomingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.sortByDate = this.sortByDate.bind(this);
        this.convertMonthToInt = this.convertMonthToInt.bind(this);
        this.returnDivs = this.returnDivs.bind(this);
        this.state = {
            data: null
        };
        fetch("https://murmuring-lake-50811.herokuapp.com/getUpcomingEvents").then(response => response.json())
            .then(data => {
                this.sortByDate(data);
            });
    }

    sortByDate(data) {
        let tempArray = new Array(data.length);
        for(let a = 0; a < data.length; ++a) {
            let highestValueElement = null;
            for(let b = 0; a < data.length; ++b) {
                let elementSorted = false;
                for(let c = 0; c < tempArray.length; ++c) {
                    if(data[b] == tempArray[c])
                        elementSorted = true;
                }
                if(!elementSorted) {
                    let copyElementToHighestValueElement = false;
                    if(highestValueElement == null)
                        copyElementToHighestValueElement = true;
                    else {
                        if(data[b].year < highestValueElement.year)
                            copyElementToHighestValueElement = true;
                        else if(data[b].year == highestValueElement.year) {
                            if(this.convertMonthToInt(data[b].month) < this.convertMonthToInt(highestValueElement.month))
                                copyElementToHighestValueElement = true;
                            else if(this.convertMonthToInt(data[b].month) == this.convertMonthToInt(highestValueElement.month)) {
                                if(data[b].day < highestValueElement.day)
                                    copyElementToHighestValueElement = true;
                                else if(data[b].day == highestValueElement.day) {
                                    if(data[b].eventTime < highestValueElement.eventTime)
                                        copyElementToHighestValueElement = true;
                                }
                            }
                        }
                    }
                    if(copyElementToHighestValueElement) {
                        highestValueElement.day = data[b].day;
                        highestValueElement.month = data[b].month;
                        highestValueElement.year = data[b].year;
                        highestValueElement.eventTime = data[b].eventTime;
                        highestValueElement.index = b;
                    }
                }
            }
            tempArray[a].day = data[highestValueElement.index].day;
            tempArray[a].month = data[highestValueElement.index].month;
            tempArray[a].year = data[highestValueElement.index].year;
            tempArray[a].eventTime = data[highestValueElement.index].eventTime;
            tempArray[a].eventImageUrl = data[highestValueElement.index].eventImageUrl;
            tempArray[a].eventName = data[highestValueElement.index].eventName;
            tempArray[a].eventLocation = data[highestValueElement.index].eventLocation;
            tempArray[a].eventLink = data[highestValueElement.index].eventLink;
        }
        this.setState({
            data: tempArray
        });
    }

    convertMonthToInt(month) {
        switch(month) {
            case 'Jan':
                return 0;
            case 'Feb':
                return 1;
            case 'Mar':
                return 2;
            case 'Apr':
                return 3;
            case 'May':
                return 4;
            case 'Jun':
                return 5;
            case 'Jul':
                return 6;
            case 'Aug':
                return 7;
            case 'Sep':
                return 8;
            case 'Oct':
                return 9;
            case 'Nov':
                return 10;
            case 'Dec':
                return 11;
        }
    }
    //make sure eventTime is always 24 hour time
    returnDivs() {
        if(this.state.data.length == null) {
            return null; 
        }
        let returnArray = null;
        new Array(this.state.data.length);
        for(let a = 0; a < this.state.data.length; ++a) {
            let key = "upcomingEvents" + a;
            returnArray[a] = (
                <div key={key} className="upcomingEvent contentText">
                    <div className="eventDate">{this.state.data[a].month} {this.state.data[a].day}, {this.data[a].year}, {this.data[a].eventTime}</div>
                    <img className="eventImage" src={this.state.data[a].eventImageUrl} alt="eventImage"></img>
                    <div className="eventName">{this.state.data[a].eventName}</div>
                    <div className="eventLocation">{this.state.data[a].eventLocation}</div>
                    <div className="eventLink"><a href={this.state.data[a].eventLink}>More Information</a></div>
                </div> 
            );
        }
        return returnArray;
    }

    render() {
       return(
            <div id="upcomingEventsPage" className="contentMain">
                {this.returnDivs()}
            </div>
       );
    }
};

export default UpcomingEvents; 