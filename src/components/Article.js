import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';
import ArticlePane from './Article/ArticlePane.js';
import BackgroundPaneContainer from './Article/BackgroundPane/BackgroundPaneContainer.js';
import '../Article.css'
import InfoPaneContainer from './Article/InfoPane/InfoPaneContainer.js';
import { connect } from 'react-redux'
import { setArticleData } from '../actions'
import axios from "axios"

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {}
        };
    }

    componentWillMount(){

        var url = "http://localhost:7071/api/article/Exekias: From Fine Craftsman to True Artist"

        var articleData = {};

        const { dispatch } = this.props;

        axios({
            method: 'get',
            url: url
        })
            .then(function (response) {
                console.log(response);
                articleData = response.data
                this.setState({article: articleData});
            })
            .catch(function (error) {
                window.alert(error);
            });

        
    }

    render() {
         const articleId = this.props.id
            return (
                <div>
                    <InfoPaneContainer id={articleId} />
                    <BackgroundPaneContainer id={articleId}/>
                    <ArticlePane article={this.state.article} id={articleId}/>
                </div>)
        }
    }

    export default connect()(Article)