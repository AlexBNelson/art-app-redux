import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../../../../bootstrap.css';
import '../../../../Article.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter, setImageSource, setScrollValue } from '../../../../actions'
import arrowLeft from '../../../../arrowLeft.svg';
import arrowRight from '../../../../arrowRight.svg';
import PageIndicatorContainer from './PageIndicatorContainer.js';
import creativeCommons from '../../../../cc.svg';




class TextPane extends Component {

    start = Date.now();
    current = Date.now();

    constructor(props) {
        super(props)
        this.state = {
            info: [],
            intro: '',
            chapters: '',
            scrollPoints: [],
            headerOffset: 0
        };

        this.previousPage.bind(this)
        this.nextPage.bind(this)

        this.introRef = React.createRef()
        this.titleRef = React.createRef()
    }



    componentDidMount() {
        const scrollNode = this.myScroll;

        scrollNode.addEventListener('scroll', function () { })

        if(this.introRef.current === null){

        }
        else if(this.introRef.current.clientHeight > 70 ){
            this.setState({headerOffset: 2})
        }
        else{
            this.setState({headerOffset: 0})
        }
    }

    nextPage() {
        const { dispatch } = this.props;
        dispatch(setImageSource(this.props.imageSource + 1))

    }

    previousPage() {
        if(this.props.imageSource !== 0){
            const { dispatch } = this.props;
            dispatch(setImageSource(this.props.imageSource - 1))
        }
    }

    formText(bodyText) {
        var formedText = [];

        for (var i = 0; i < bodyText.body.length; i++) {

            var para = [];
            var body = bodyText.body[i]

            for (var j = 0; j < body.elements.length; j++) {
                var element = body.elements[j];

                switch (element.style) {
                    case 0:
                        para.push(<span> {element.text}</span>)
                        break;
                    case 1:
                        para.push(<i> {element.text}</i>)
                        break;
                    case 2:
                        para.push(<b> {element.text}</b>)
                        break;
                    case 3:
                        para.push(<a class="article-link" target="_blank" href={element.uri}>&nbsp;{element.text}</a>)
                        break;
                    case 4:
                        para.push(<p class="quote"><strong class="quote-mark">"</strong> {element.text}</p>)
                        break;
                    default:
                }
            }
            if(i==0){
                formedText.push(<p class="body-para-first">{para}</p>);
            }
            else{
                formedText.push(<p class="body-para">{para}</p>);
            }
        }
        return formedText;
    } 

    render() {
        var header = ""

        var body = ""

        var data = this.props.article

        var self = this;

        //how far header elements are offset from top depending on whether title is one line or two
        var headerOffset = 0

        var introBreak

        var titleLabel

        if (this.props.imageSource == 0) {
            body = this.formText(data.introPage)

            introBreak = <div class="intro-break"><br/>_____________________<br/><br/></div>

            if(data.introPage.title.length<30){
                header = (<div class="article-header-intro" style={{height: (17 + this.state.headerOffset) + "vh"}}>
                        <span>                          
                            <div class="article-header-title-intro" ref={this.introRef}>{data.introPage.title}</div>
                            <button class="next-button" onClick={self.nextPage.bind(self)}>
                                <img class="button-img" src={arrowRight}/>
                            </button>                        
                        </span>
                        <div class="article-header-author" style={{margin: (7.3 + headerOffset) + "vh 0 0 0"}}>{data.introPage.author}</div>
                        <PageIndicatorContainer shift={false}  class="page-indicator" page={1} total={data.bodyPages.length+2}/>
                      </div>
            )
            }else{
                header = (<div class="article-header-intro" style={{height: (17 + this.state.headerOffset) + "vh"}}>
                <span>                          
                    <div class="article-header-title-intro" ref={this.introRef}>{data.introPage.title}</div>
                    <button class="next-button" onClick={self.nextPage.bind(self)}>
                        <img class="button-img" src={arrowRight}/>
                    </button>                        
                </span>
                <div class="article-header-author-shift">{data.introPage.author}</div>
                <PageIndicatorContainer shift={true}  class="page-indicator" page={1} total={data.bodyPages.length+2}/>
              </div>
    ) 
            }

        }
        else if (this.props.imageSource <= data.bodyPages.length) {
            body = this.formText(data.bodyPages[this.props.imageSource - 1])

            if(data.bodyPages[this.props.imageSource - 1].title.length<40){
                header = (<div class="article-header">
                        <span>
                            <button class="prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="button-img" src={arrowLeft}/>
                            </button>
                            <div class="article-header-title" ref={this.titleRef}>{data.bodyPages[this.props.imageSource - 1].title}</div>
                            <button class="next-button" onClick={self.nextPage.bind(self)}>
                                <img class="button-img" src={arrowRight}/>
                            </button>
                        </span>
                        <div class="article-header-artist">{data.bodyPages[this.props.imageSource - 1].artist}</div>
                        <PageIndicatorContainer shift={false}  class="page-indicator" page={this.props.imageSource + 1} total={data.bodyPages.length+2}/>
                        <div class="article-header-date" style={{top: (1.5 + headerOffset) + "vh"}}>{data.bodyPages[this.props.imageSource - 1].date}</div>
                        <div class="article-header-medium" style={{top: (2.5 + headerOffset) + "vh"}}>{data.bodyPages[this.props.imageSource - 1].medium}</div>
                        <div class="article-header-museum"style={{top: (3.5 + headerOffset) + "vh"}}>{data.bodyPages[this.props.imageSource - 1].museum}</div>
                      </div>)
            }
            else{
                header = (<div class="article-header">
                        <span>
                            <button class="prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="button-img" src={arrowLeft}/>
                            </button>
                            <div class="article-header-title" ref={this.titleRef}>{data.bodyPages[this.props.imageSource - 1].title}</div>
                            <button class="next-button" onClick={self.nextPage.bind(self)}>
                                <img class="button-img" src={arrowRight}/>
                            </button>
                        </span>
                        <div class="article-header-artist-shift">{data.bodyPages[this.props.imageSource - 1].artist}</div>
                        <PageIndicatorContainer shift={true} class="page-indicator-shift" page={this.props.imageSource + 1} total={data.bodyPages.length+2}/>
                        <div class="article-header-date" style={{top: (1.5 + headerOffset) + "vh"}}>{data.bodyPages[this.props.imageSource - 1].date}</div>
                        <div class="article-header-medium" style={{top: (2.5 + headerOffset) + "vh"}}>{data.bodyPages[this.props.imageSource - 1].medium}</div>
                        <div class="article-header-museum"style={{top: (3.5 + headerOffset) + "vh"}}>{data.bodyPages[this.props.imageSource - 1].museum}</div>
                      </div>)
            }

            

            titleLabel = (<div class="title-label">{data.introPage.title}</div>)
        }
        else {

            var sources = []

            var sourceArray = data.appendixPage.sources.split(" ");
            
            for (var i = 0; i < sourceArray.length; i++){
                sources.push(<p><a target="_blank" href={sourceArray[i]}>{sourceArray[i]}</a></p>)
            }

            body = <div><p><h3>Sources:</h3> </p>{sources}</div>

            header = (<div class="article-header">
                        <span>
                            <button class="prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="button-img" src={arrowLeft}/>
                            </button>
                        </span>
                      </div>)
        }

        return (
            <div>
                <div id="TextPane.scrollDiv" class="container article-text-pane" ref={ref => this.myScroll = ref} >
                    <div class="row">
                        <div class="text-column">
                            {titleLabel}
                            <div>
                                {header}
                            </div>
                                {introBreak}
                            <div class="article-body-pane">
                                {body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

TextPane.propTypes = {
    hideImage: PropTypes.func.isRequired
}

export default connect()(TextPane)