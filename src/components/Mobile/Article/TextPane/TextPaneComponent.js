import React, { Component } from 'react';
import '../../../../bootstrap.css';
import '../../../../Article.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setImageSource } from '../../../../actions'
import arrowLeft from '../../../../arrowLeft.svg';
import arrowRight from '../../../../arrowRight.svg';
import homeButton from '../../../../home-button.svg';
import PageIndicatorContainer from './PageIndicatorContainer.js'




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
                        para.push(<a target="_blank" href={element.uri}> {element.text}</a>)
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

            introBreak = <div class="intro-break"><br/>_____________________</div>

            header = (<div class="mobile-header-intro" style={{height: (17 + this.state.headerOffset) + "vh"}}>
                        <span>                          
                            <div class="mobile-header-title-intro" ref={this.introRef}>{data.introPage.title}</div>
                                                  
                        </span>
                        <div class="mobile-header-author" style={{margin: (7 + headerOffset) + "vh 0 0 0"}}>{data.introPage.author}</div>
                        <div class="mobile-button-container-intro">
                        <a href="/"><img src={homeButton} class="mobile-home-button-intro"/></a>
                            <button class="mobile-next-button" onClick={self.nextPage.bind(self)}>
                                Continue<img class="mobile-button-img" src={arrowRight}/>
                            </button>  
                        </div>
                      </div>
            )
        }
        else if (this.props.imageSource <= data.bodyPages.length) {
            body = this.formText(data.bodyPages[this.props.imageSource - 1])

            header = (<div class="mobile-article-header">
                        <span>
                            <div class="mobile-header-title" ref={this.titleRef}>{data.bodyPages[this.props.imageSource - 1].title}</div>
                            
                        </span>
                        <div class="mobile-header-artist">{data.bodyPages[this.props.imageSource - 1].artist}<a href="/"><img src={homeButton} class="mobile-home-button"/></a></div>
                        <div class="mobile-header-date" style={{top: (1.5 + headerOffset) + "vh"}}>{data.bodyPages[this.props.imageSource - 1].date}, {data.bodyPages[this.props.imageSource - 1].medium}, {data.bodyPages[this.props.imageSource - 1].museum}</div>

                        <div class="mobile-button-container">

                            <button class="mobile-prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="mobile-button-img" src={arrowLeft}/>
                            </button>
                            <button class="mobile-next-button" onClick={self.nextPage.bind(self)}>
                                <img class="mobile-button-img" src={arrowRight}/>
                            </button>
                        </div>
                        
                      </div>)

        }
        else {
            body = data.appendixPage.sources

            header = (<div class="article-header">
                        <span>
                            <button class="mobile-next-button" onClick={self.previousPage.bind(self)}>
                                <img class="mobile-button-img" src={arrowLeft}/>
                            </button>
                        </span>
                      </div>)
        }

        return (
            <div>
                <div id="TextPane.scrollDiv" class="container" ref={ref => this.myScroll = ref} >
                    <div class="row">
                        <div class="mobile-text-column">
                            {titleLabel}
                            <div>
                                {header}
                            </div>
                                {introBreak}
                            <div class="mobile-body-pane">
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