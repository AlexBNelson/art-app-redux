import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';
import ArticlePane from './Article/ArticlePane.js';
import '../Article.css'
import { connect } from 'react-redux'
import { setArticleData } from '../actions'
import axios from "axios"

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: null
        };
    }

    componentWillMount(){

        var url = "https://dyptych-api.azurewebsites.net/api/article/" + this.props.id.articleId

        var articleData = {};

        const { dispatch } = this.props;

        var self = this;

        axios({
            method: 'get',
            url: url
        })
            .then(function (response) {
                console.log(response);
                articleData = response.data
                self.setState({article: articleData});
            })
            .catch(function (error) {
                window.alert(error);
            });

            
    }

    render() {
        if(this.state.article === null){
            return null;
        }

         const articleId = this.props.id
            return (
                <div>
                    <ArticlePane article={this.state.article} id={articleId}/>
                </div>)
        }
    }

    export default connect()(Article)