import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../../../bootstrap.css';
import '../../../../Article.css';
import {articles} from '../../../../ArticleText.js';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter, setImageSource, setScrollValue } from '../../../../actions'
import { VisibilityFilters } from '../../../../actions'
import axios from 'axios'
import arrowLeft from '../../../../arrowLeft.png';
import arrowRight from '../../../../arrowRight.png';



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
    }

    

    componentDidMount() {
        const { hideImage, dispatch } = this.props;
        const scrollNode = this.myScroll;

        const scrollPointUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/ImagePositions/0';

        var scrollPoints = [];

        var infoUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/ArticleInfo/0'

        axios({
            method: 'get',
            url: infoUrl
        })
            .then(response => this.setState({ info: response.data.split("\",\"") })
            )
            .catch(function (error) {
                window.alert(error);

            });

        axios({
            method: 'get',
            url: scrollPointUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(function (response) {
                var str1 = response.data.replace("]", "")
                var str2 = str1.replace("[", "")
                var array = str2.split(",")
                var i;

                for (i = 0; i < array.length; i++) {

                    scrollPoints.push(array[i])

                }

            }
            )
            .catch(function (error) {
                window.alert(error);

            });

        var imageLinks = [];

        const imageLinksUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/ImageLinks/0';

        axios({
            method: 'get',
            url: imageLinksUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(function (response) {
                var i;

                for (i = 0; i < response.data.length; i++) {
                    imageLinks.push(response.data[i])

                }
            }
            )
            .catch(function (error) {
                window.alert(error);

            });
        
        scrollNode.addEventListener('scroll', function () { })

        const introUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/Intro/0';;


        axios({
            method: 'get',
            url: introUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(response => this.setState({ intro: response.data })
            )
            .catch(function (error) {
                window.alert(error);

            });
        
            var chaptersUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/Chapters/0';
            axios({
                method: 'get',
                url: chaptersUrl,
                headers: {
                    "Authorization": "09627a2d93144d10828042019f504b06",
                    "Accept": "text/html" 
                }
            })
                .then(response => this.setState({ chapters: response.data }))
                .catch(function (error) {
                    window.alert(error);

                });
        }
    

        

       
    
    

    handleScroll() {
        const {dispatch } = this.props;
    }

    nextPage() {
        const { dispatch } = this.props;
        dispatch(setImageSource(this.props.imageSource + 1))

    }

    previousPage() {
        const { dispatch } = this.props;
        dispatch(setImageSource(this.props.imageSource - 1))
    }

    render() {
        var introText

        var displayedInfo

        var infoHtml
        
        if (this.props.viewState == false && this.props.imageSource == 0) {
            displayedInfo = this.state.info[this.state.info.length - 1]
        }
        else {
            displayedInfo = this.state.info[this.props.imageSource - 1]

        }

        if (displayedInfo != null) {
            displayedInfo.replace("[\"", "")
            var formattedArray = displayedInfo.split('|');
            var i = 0;
            infoHtml = [];


            for (i = 0; i < formattedArray.length; i++) {
                if (formattedArray[i][0] == 'L') {
                    var link = formattedArray[i].replace('Link: ', '')
                    infoHtml.push(<div class="info-title">Link: <a href={link}>{link}</a></div>)
                }
                else {
                    infoHtml.push(<div class="info-title">{formattedArray[i]}</div>)
                }
            }
        }

        if (this.props.imageSource==0) {
            introText = this.state.intro;
        }


        var array = this.state.chapters.split('%');
        var i = 0;
        var textArray = [];

        for (i = 0; i < array.length; i++) {
            var paraList = array[i].split('|');
            var htmlElement = [];
            var j = 0;
            for (j = 0; j < paraList.length; j++) {
                htmlElement.push(<p>{paraList[j]}</p>)
            }
            textArray.push(htmlElement)
        }

        return (
            <div>
            <div id="TextPane.scrollDiv" class="container article-text-pane" ref={ref => this.myScroll = ref} >
                <div class="row">
                        <div class="text-column col-lg-10">
                            {infoHtml}
                            <div class="article-intro-pane">
                                {introText}
                    </div>
                            <div class="article-body-pane">
                                {textArray[this.props.imageSource-1]}
                    </div>
                </div>
                
                        <div class="page-buttons col-lg-2">
                            <button class="page-button" onClick={this.nextPage.bind(this)}><img class="button-img" src={arrowLeft}></img></button>
                            <button class="page-button" onClick={this.previousPage.bind(this)}><img class="button-img" src={arrowRight}></img></button>
            </div>
                    </div>
                </div></div>


        );
    }
}

TextPane.propTypes = {
    hideImage: PropTypes.func.isRequired
}

export default connect()(TextPane)