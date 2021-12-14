import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../../../../bootstrap.css';
import '../../../../Article.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter, setImageSource, setScrollValue } from '../../../../actions'
import arrowLeft from '../../../../arrowLeft.svg';
import arrowRight from '../../../../arrowRight.svg';
import homeButton from '../../../../home-button.svg';
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
        this.bodyRef.scrollTo(0,0)
        dispatch(setImageSource(this.props.imageSource + 1))

    }

    previousPage() {
        

        if(this.props.imageSource !== 0){
            this.bodyRef.scrollTo(0,0)
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
                        <div class="article-header-author">{data.introPage.author}</div>
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
                
              </div>
    ) 
            }

        }
        else if (this.props.imageSource <= data.bodyPages.length) {
            body = this.formText(data.bodyPages[this.props.imageSource - 1])

            if(data.bodyPages[this.props.imageSource - 1].title.length<40){
                header = (<div class="article-header">
                        <span>
                            <a href="/" class="home-button"><img class="home-img" src={homeButton}/></a>
                            <button class="prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="button-img" src={arrowLeft}/>
                            </button>
                            <div class="article-header-title" ref={this.titleRef}>{data.bodyPages[this.props.imageSource - 1].title}</div>
                            <button class="next-button" onClick={self.nextPage.bind(self)}>
                                <img class="button-img" src={arrowRight}/>
                            </button>
                        </span>
                        <div class="article-header-artist">{data.bodyPages[this.props.imageSource - 1].artist}</div>
                        
                        <div class="article-header-details" >{data.bodyPages[this.props.imageSource - 1].date}, {data.bodyPages[this.props.imageSource - 1].medium}, {data.bodyPages[this.props.imageSource - 1].museum}</div>

                      </div>)
            }
            else{
                header = (<div class="article-header">
                        <span>
                            <a href="/" class="home-button"><img class="home-img" src={homeButton}/></a>
                            <button class="prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="button-img" src={arrowLeft}/>
                            </button>
                            <div class="article-header-title" ref={this.titleRef}>{data.bodyPages[this.props.imageSource - 1].title}</div>
                            <button class="next-button" onClick={self.nextPage.bind(self)}>
                                <img class="button-img" src={arrowRight}/>
                            </button>
                        </span>
                        <div class="article-header-artist-shift">{data.bodyPages[this.props.imageSource - 1].artist}</div>
                        
                        <div class="article-header-details-shift" >{data.bodyPages[this.props.imageSource - 1].date}, {data.bodyPages[this.props.imageSource - 1].medium}, {data.bodyPages[this.props.imageSource - 1].museum}</div>

                      </div>)
            }

            
        }
        else {

            var sources = []

            var sourceArray = data.appendixPage.sources.split(" ");
            
            for (var i = 0; i < sourceArray.length; i++){
                sources.push(<p><a target="_blank" href={sourceArray[i]}>{sourceArray[i]}</a></p>)
            }

            body = <div><div>Related Articles</div><p><h3>Sources:</h3> </p>{sources}</div>

            header = (<div class="article-header">
                        <span>
                            <a href="/" class="home-button"><img class="home-img" src={homeButton}/></a>
                            <button class="prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="button-img" src={arrowLeft}/>
                            </button>
                        </span>
                      </div>)
        

        
        }

        var textPaneCss;
        var introLabel;

        if(this.props.imageSource == 0){
            textPaneCss = "container article-text-pane-intro"
            introLabel = <p class="intro-label">Background Image: {this.props.article.introPage.imageLabel}</p>;
        }
        else{
            textPaneCss ="container article-text-pane"
            introLabel = null
        }

        return (
            <div>
                <div id="TextPane.scrollDiv" class={textPaneCss} ref={ref => this.myScroll = ref} >
                    <div class="row">
                        <div class="text-column">
                            {titleLabel}
                            <div>
                                {header}
                            </div>
                                {introBreak}
                            <div ref={ (ref) => this.bodyRef=ref } class="article-body-pane">
                                {body}
                                {introLabel}
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