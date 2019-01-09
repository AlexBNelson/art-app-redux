import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../../bootstrap.css';
import '../../../Article.css';
import {articles} from '../../../ArticleText.js';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter, setImageSource, setScrollValue } from '../../../actions'
import { VisibilityFilters } from '../../../actions'
import axios from 'axios'



class TextPane extends Component {

    start = Date.now();
    current = Date.now();

    constructor(props) {
        super(props)
        this.state = {
            intro: '',
            chapters: [],
            scrollPoints: []
        };
    }


    componentDidMount() {
        const { hideImage, dispatch } = this.props;
        const scrollNode = this.myScroll;
        
        const scrollPointUrl = 'https://dyptych-fa.azurewebsites.net/api/' + this.props.id + '/ImagePositions/0';
        
        var scrollPoints = [];
        
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

        const imageLinksUrl = 'https://dyptych-fa.azurewebsites.net/api/' + this.props.id + '/ImageLinks/0';

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
                console.log(scrollPoints)
                console.log(imageLinks)
            }
            )
            .catch(function (error) {
                window.alert(error);

            });


        
        

        scrollNode.addEventListener('scroll', function () {

            var i;

            dispatch(setScrollValue(scrollNode.scrollTop))


            if (scrollNode.scrollTop <= scrollPoints[0]) {
                dispatch(setVisibilityFilter(VisibilityFilters.INVISIBLE));
            }
            else {
                dispatch(setVisibilityFilter(VisibilityFilters.VISIBLE))
            }
            for (i = 0; i < scrollPoints.length; i++) {
                if (i == 0) {
                    if (scrollNode.scrollTop > scrollPoints[i] || scrollNode.scrollTop < scrollPoints[i+1]) {
                        dispatch(setImageSource(0))
                    }
                }
                else if (scrollNode.scrollTop < scrollPoints[i] && scrollNode.scrollTop > scrollPoints[i-1]) {
                            dispatch(setImageSource(i))
                    }
                }
            }
            //if (scrollNode.scrollTop <= 300) {
            //    dispatch(setVisibilityFilter(VisibilityFilters.INVISIBLE));
            //}
            //else if (scrollNode.scrollTop > 300) {
            //    dispatch(setVisibilityFilter(VisibilityFilters.VISIBLE));
            //    dispatch(setImageSource("http://localhost:58282/featuredArticle2"))
            //}
        )

        const introUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/Chapters/0';;
        

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

        const chaptersUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/Chapters/0';

        axios({
            method: 'get',
            url: chaptersUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(response => this.setState({ chapters: response.data })
            )
            .catch(function (error) {
                window.alert(error);

            });


        

       
    }
    

    handleScroll() {
        console.log(this);
    }

    render() {
        const introText = this.state.intro;



        return (
            <div id="TextPane.scrollDiv" class="container article-text-pane" ref={ref => this.myScroll = ref} >
                <div class="article-intro-pane">
                    {articles.data[0].Text}
                    {introText}
                    </div>
                <div class=" article-body-pane">
                    {this.state.chapters}
                    </div>
                </div>

        );
    }
}

TextPane.propTypes = {
    hideImage: PropTypes.func.isRequired
}

export default connect()(TextPane)