import React from 'react';

class MusicAndVideos extends React.Component {
    constructor(props) {
        super(props);
        this.setContent = this.setContent.bind(this);
        this.click0 = this.click0.bind(this);
        this.click1 = this.click1.bind(this);
        this.click2 = this.click2.bind(this);
        this.click3 = this.click3.bind(this);
        this.click4 = this.click4.bind(this);
        this.click5 = this.click5.bind(this);
        this.click6 = this.click6.bind(this);
        this.click7 = this.click7.bind(this);
        this.click8 = this.click8.bind(this);
        this.click9 = this.click9.bind(this);
        this.click10 = this.click10.bind(this);
        this.click11 = this.click11.bind(this);
        this.click12 = this.click12.bind(this);
        this.click13 = this.click13.bind(this);
        this.click14 = this.click14.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.confirmPageSelect = this.confirmPageSelect.bind(this);
        this.createContentPreview = this.confirmPageSelect.bind(this);
        this.setGridElementClass = this.setGridElementClass.bind(this);
        let blankArray = new Array(15);
        let gridElementHiddenArray = new Array(15);
        for(let a = 0; a < 15; ++a) {
            blankArray[a] = null;
            gridElementHiddenArray[a] = "gridElementHidden";
        }
        this.state = {
            pageAmount: -1,
            contentAmount: -1,
            currentPage: 0,
            currentContent: -1,
            isContentHidden: "contentHidden",
            contentUrl: blankArray,
            contentPreview: blankArray,
            contentName: blankArray,
            gridElementClass: gridElementHiddenArray
        };
        let fetchRequest = {
            startIndex: this.state.currentPage / 15,
            numRequested: 15
        };
        fetch('https://murmuring-lake-50811.herokuapp.com/getMusicAndVideos', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fetchRequest)
        }).then(response => response.json())
            .then(data => {
                console.log("data: " + data);
                console.log("data content amount: " + data.contentAmount);
                console.log("data content name length: " + data.contentName.length);
                let pageAmountTemp = data.contentAmount / 15;
                if(pageAmountTemp > Math.floor(pageAmountTemp))
                    pageAmountTemp = Math.floor(pageAmountTemp) + 1;
                let gridElementClass = this.setGridElementClass(data.contentName);
                this.setState({
                    pageAmount: pageAmountTemp,
                    contentAmount: data.contentAmount,
                    currentPage: this.state.currentPage,
                    currentContent: 0,
                    isContentHidden: "contentHidden",
                    contentUrl: data.contentUrl,
                    contentPreview: this.createContentPreview(data.contentPreview),
                    contentName: data.contentName,
                    gridElementClass: gridElementClass
                });
            });
    }

    setGridElementClass(contentName) {
        let returnValue = new Array(contentName.length);
        for(let a = 0; a < contentName.length; ++a) {
            console.log("contentName[" + a + "]: " + contentName[a]);
            if(contentName[a] == null)
                returnValue[a] = "gridElementHidden";
            else
                returnValue[a] = "gridElementNotHidden";
        }
        return returnValue;
    }

    createContentPreview(contentPreview) {
        let returnArray = new Array(15);
        for(let a = 0; a < 15; ++a) {
            if(contentPreview[a] == null) {
                returnArray[a] = null;
            }
            else {
                returnArray[a] = {
                    backgroundImage: 'url(' + contentPreview[a] + ')',
                    backgroundSize: 'fill',
                    overflow: 'hidden'
                };
            }
        }
        console.log("returnArray: " + returnArray);
        return returnArray;
    }

    setContent(contentUrlNum) {
        this.setState({
            currentContent: contentUrlNum,
            isContentHidden: "contentVisible"
        });
    }

    click0(){
        this.setContent(0);
    }

    click1(){
        this.setContent(1);
    }

    click2(){
        this.setContent(2);
    }

    click3(){
        this.setContent(3);
    }

    click4(){
        this.setContent(4);
    }

    click5(){
        this.setContent(5);
    }

    click6(){
        this.setContent(6);
    }

    click7(){
        this.setContent(7);
    }

    click8(){
        this.setContent(8);
    }

    click9(){
        this.setContent(9);
    }

    click10(){
        this.setContent(10);
    }

    click11(){
        this.setContent(11);
    }

    click12(){
        this.setContent(12);
    }

    click13(){
        this.setContent(13);
    }

    click14(){
        this.setContent(14);
    }

    previousPage() {
        if(this.state.currentPage > 0) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }

    nextPage() {
        if(this.state.currentPage < this.state.pageAmount) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    confirmPageSelect() {
        let fetchRequest = {
            startIndex: this.state.currentPage / 15,
            numRequested: 15
        };
        fetch('https://murmuring-lake-50811.herokuapp.com/getMusicAndVideos', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(fetchRequest)
        }).then(response => response.json())
            .then(data => {
                let pageAmountTemp = data.contentAmount / 15;
                if(pageAmountTemp > Math.floor(pageAmountTemp))
                    pageAmountTemp = Math.floor(pageAmountTemp) + 1;
                let gridElementClass = this.setGridElementClass(data.contentName);
                this.setState({
                    pageAmount: pageAmountTemp,
                    contentAmount: data.contentAmount,
                    currentPage: this.state.currentPage,
                    currentContent: 0,
                    isContentHidden: "contentHidden",
                    contentUrl: data.contentUrl,
                    contentPreview: this.createContentPreview(data.contentPreview),
                    contentName: data.contentName,
                    gridElementClass: gridElementClass
                });
            });
    }

    render() {
        //<iframe className="videoContent" src="https://drive.google.com/file/d/1TnaAjRPDOM86mWYF6Emo4lW5nKoaEQfD/preview" allowfullscreen="allowfullscreen"></iframe>
        return(
            <div id="musicAndVideosPage" className="contentMain">
                <div className={this.state.isContentHidden}>
                    <iframe className="videoContent" src={this.state.contentUrl[this.state.currentContent]}></iframe>
                    <div id="mainContentText">{this.state.contentName[this.state.currentContent]}</div>
                </div>
                <div className="gridContainer">
                    <div className={this.state.gridElementClass[0]} style={this.state.contentPreview[0]} onClick={this.click0}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[0]}</div>
                    </div>
                    <div className={this.state.gridElementClass[1]} style={this.state.contentPreview[1]} onClick={this.click1}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[1]}</div>
                    </div>
                    <div className={this.state.gridElementClass[2]} style={this.state.contentPreview[2]} onClick={this.click2}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[2]}</div>
                    </div>
                    <div className={this.state.gridElementClass[3]} style={this.state.contentPreview[3]} onClick={this.click3}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[3]}</div>
                    </div>
                    <div className={this.state.gridElementClass[4]} style={this.state.contentPreview[4]} onClick={this.click4}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[4]}</div>
                    </div>
                    <div className={this.state.gridElementClass[5]} style={this.state.contentPreview[5]} onClick={this.click5}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[5]}</div>
                    </div>
                    <div className={this.state.gridElementClass[6]} style={this.state.contentPreview[6]} onClick={this.click6}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[6]}</div>
                    </div>
                    <div className={this.state.gridElementClass[7]} style={this.state.contentPreview[7]} onClick={this.click7}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[7]}</div>
                    </div>
                    <div className={this.state.gridElementClass[8]} style={this.state.contentPreview[8]} onClick={this.click8}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[8]}</div>
                    </div>
                    <div className={this.state.gridElementClass[9]} style={this.state.contentPreview[9]} onClick={this.click9}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[9]}</div>
                    </div>
                    <div className={this.state.gridElementClass[10]} style={this.state.contentPreview[10]} onClick={this.click10}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[10]}</div>
                    </div>
                    <div className={this.state.gridElementClass[11]} style={this.state.contentPreview[11]} onClick={this.click11}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[11]}</div>
                    </div>
                    <div className={this.state.gridElementClass[12]} style={this.state.contentPreview[12]} onClick={this.click12}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[12]}</div>
                    </div>
                    <div className={this.state.gridElementClass[13]} style={this.state.contentPreview[13]} onClick={this.click13}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[13]}</div>
                    </div>
                    <div className={this.state.gridElementClass[14]} style={this.state.contentPreview[14]} onClick={this.click14}>
                        <img className="gridPreviewImage" src="./img/playButton.png"></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[14]}</div>
                    </div>
                </div>
                <div className="pageSelectFlexContainer">
                    <button className="pageBackButton" onClick={this.previousPage}>&lt;</button>
                    <div className="currentPageDisplay">{this.state.currentPage}</div>
                    <button className="pageForwardButton" onClick={this.nextPage}>&gt;</button>
                    <button className="confirmPageSelectButton" onClick={this.confirmPageSelect}>Confirm</button>
                </div>
            </div>
        );
    }
};

export default MusicAndVideos; 