import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../../../bootstrap.css';
import '../../../../Article.css';
import { articles } from '../../../../ArticleText.js';
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
        const scrollNode = this.myScroll;

        scrollNode.addEventListener('scroll', function () { })
    }








    handleScroll() {
        const { dispatch } = this.props;
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

        var data = this.props.articleData
       
        if(this.props.imageSource==0){

            var introBody = [];

            for (var i = 0; i < data.introPage.body.length; i++) {
                var para;
                var body = data.introPage.body[i]
                for (var j = 0; j < body.elements.length; j++) {
                    var element = body.elements[j];

                    switch(element.style){
                        case 1:
                            break;
                        default:
                    }
                }
                
            }

        introText = <div><p>{data.introPage.title}</p><p>{data.introPage.title}</p><p>{data.introPage}</p></div>
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
                                {textArray[this.props.imageSource - 1]}
                            </div>
                        </div>

                        <div class="page-buttons col-lg-2">
                            <button class="page-button" onClick={this.nextPage.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                            <button class="page-button" onClick={this.previousPage.bind(this)}><img class="button-img" src={arrowLeft}></img></button>
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