import React from 'react';

class Home extends React.Component {
    //change the bit about src to use media query (ie. use classname to deal with it instead of stating url here)
    render() {
        return(
            <div id="home" className="contentHome">
                {/*<img className="cover" src="./img/cover.jpg" alt="cover"></img>*/}
            </div>
        );
    }
};

export default Home; 