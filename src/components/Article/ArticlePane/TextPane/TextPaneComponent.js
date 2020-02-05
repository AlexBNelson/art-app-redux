import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../../../../bootstrap.css';
import '../../../../Article.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter, setImageSource, setScrollValue } from '../../../../actions'
import arrowLeft from '../../../../arrowLeft.svg';
import arrowRight from '../../../../arrowRight.svg';
import PageIndicator from './PageIndicator.js'



class TextPane extends Component {

    start = Date.now();
    current = Date.now();

    constructor(props) {
        super(props)
        this.state = {
            info: [],
            intro: '',
            chapters: '',
            scrollPoints: []
        };

        this.previousPage.bind(this)
        this.nextPage.bind(this)
    }



    componentDidMount() {
        const scrollNode = this.myScroll;

        scrollNode.addEventListener('scroll', function () { })
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

        if (this.props.imageSource == 0) {
            body = this.formText(data.introPage)

            header = (<div class="article-header-intro">
                        <span>
                            <button class="prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="button-img" src={arrowLeft}/>
                            </button>                            
                            <div class="article-header-title-intro">{data.introPage.title}</div>
                            <button class="next-button" onClick={self.nextPage.bind(self)}>
                                <img class="button-img" src={arrowRight}/>
                            </button>                        
                        </span>
                        <div class="article-header-author">{data.introPage.author}</div>
                        <PageIndicator class="page-indicator" page={1} total={data.bodyPages.length+2}/>
                      </div>
            )
        }
        else if (this.props.imageSource <= data.bodyPages.length) {
            body = this.formText(data.bodyPages[this.props.imageSource - 1])

            header = (<div class="article-header">
                        <span>
                            <button class="prev-button" onClick={self.previousPage.bind(self)}>
                                <img class="button-img" src={arrowLeft}/>
                            </button>
                            <div class="article-header-title">{data.bodyPages[this.props.imageSource - 1].title}</div>
                            <button class="next-button" onClick={self.nextPage.bind(self)}>
                                <img class="button-img" src={arrowRight}/>
                            </button>
                        </span>
                        <div class="article-header-artist">{data.bodyPages[this.props.imageSource - 1].artist}</div>
                        <PageIndicator class="page-indicator" page={this.props.imageSource + 1} total={data.bodyPages.length+2}/>
                        <div class="article-header-date">{data.bodyPages[this.props.imageSource - 1].date}</div>
                        <div class="article-header-medium">{data.bodyPages[this.props.imageSource - 1].medium}</div>
                        <div class="article-header-museum">{data.bodyPages[this.props.imageSource - 1].museum}</div>
                      </div>)
        }
        else {
            body = data.appendixPage.sources

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
                            <div>
                                {header}
                            </div>
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