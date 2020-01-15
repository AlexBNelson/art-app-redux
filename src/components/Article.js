import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';
import ArticlePane from './Article/ArticlePane.js';
import BackgroundPaneContainer from './Article/BackgroundPane/BackgroundPaneContainer.js';
import '../Article.css';
import InfoPaneContainer from './Article/InfoPane/InfoPaneContainer.js';
import { connect } from 'react-redux'

class Article extends Component {

    constructor(props) {
        super(props);
        this.setState({articleId: props.id.articleId})
    }
    

    render() {
         const articleId = this.props.id.articleId;
            return (
                <div>
                    <InfoPaneContainer id={articleId} />
                    <BackgroundPaneContainer id={articleId}/>
                    <ArticlePane id={articleId}/>
                </div>)
        }
    }

    export default connect()(Article)