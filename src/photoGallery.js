import React from 'react';

class PhotoGallery extends React.Component {
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
            contentName: blankArray,
            gridElementClass: gridElementHiddenArray
        };
        let fetchRequest = {
            startIndex: this.state.currentPage / 15,
            numRequested: 15
        };
        fetch('https://murmuring-lake-50811.herokuapp.com/getPhotoGallery', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({fetchRequest})
        }).then(response => response.json())
            .then(data => {
                console.log("data: " + data);
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
                    contentName: data.contentName,
                    gridElementClass: gridElementClass
                });
            });
    }

    setGridElementClass(contentName) {
        for(let a = 0; a < contentName.length; ++a) {
            if(contentName[a] == "null")
                contentName[a] = "gridElementHidden";
            else
                contentName[a] = "gridElementNotHidden";
        }
        return contentName;
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
        fetch('https://murmuring-lake-50811.herokuapp.com/getPhotoGallery', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({fetchRequest})
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
                    contentName: data.contentName,
                    gridElementClass: gridElementClass
                });
            });
    }

    render() {
        return(
            <div id="photoGalleryPage" className="contentMain">
                <div className={this.state.isContentHidden}>
                    <img className="photoContent" src={this.state.contentUrl[this.state.currentContent]}></img>
                </div>
                <div className="gridContainer">
                    <div className={this.gridElementClass[0]} onClick={this.click0}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[0]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[0]}</div>
                    </div>
                    <div className={this.gridElementClass[1]} onClick={this.click1}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[1]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[1]}</div>
                    </div>
                    <div className={this.gridElementClass[2]} onClick={this.click2}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[2]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[2]}</div>
                    </div>
                    <div className={this.gridElementClass[3]} onClick={this.click3}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[3]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[3]}</div>
                    </div>
                    <div className={this.gridElementClass[4]} onClick={this.click4}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[4]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[4]}</div>
                    </div>
                    <div className={this.gridElementClass[5]} onClick={this.click5}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[5]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[5]}</div>
                    </div>
                    <div className={this.gridElementClass[6]} onClick={this.click6}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[6]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[6]}</div>
                    </div>
                    <div className={this.gridElementClass[7]} onClick={this.click7}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[7]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[7]}</div>
                    </div>
                    <div className={this.gridElementClass[8]} onClick={this.click8}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[8]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[8]}</div>
                    </div>
                    <div className={this.gridElementClass[9]} onClick={this.click9}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[9]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[9]}</div>
                    </div>
                    <div className={this.gridElementClass[10]} onClick={this.click10}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[10]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[10]}</div>
                    </div>
                    <div className={this.gridElementClass[11]} onClick={this.click11}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[11]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[11]}</div>
                    </div>
                    <div className={this.gridElementClass[12]} onClick={this.click12}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[12]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[12]}</div>
                    </div>
                    <div className={this.gridElementClass[13]} onClick={this.click13}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[13]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[13]}</div>
                    </div>
                    <div className={this.gridElementClass[14]} onClick={this.click14}>
                        <img className="gridPreviewImage" src={this.state.contentUrl[14]}></img>
                        <div className="gridElementTitle contentText">{this.state.contentName[1400]}</div>
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

export default PhotoGallery;