import React from 'react';
import './App.css';
import Menu from './menu.js';
import PageContainer from './pageContainer.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "home",
            isMobileHidden: "mobileIsHidden"
        };
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    setCurrentPage(currentPage) {
        if(currentPage == "hamburgerMenu") {
            if(this.state.isMobileHidden == "mobileIsHidden")
                this.setState({isMobileHidden: "mobileIsNotHidden"});
            else
                this.setState({isMobileHidden: "mobileIsHidden"});
        }
        else {
            this.setState({currentPage: currentPage});
            if(this.state.isMobileHidden == "mobileIsNotHidden")
                this.setState({isMobileHidden: "mobileIsHidden"});
        }
    }

    render() {
        return (
            <div id="app">
                <Menu setCurrentPage={this.setCurrentPage} isMobileHidden={this.state.isMobileHidden}/>
                <PageContainer currentPage={this.state.currentPage}/>
            </div>
        );
    }
};

export default App;