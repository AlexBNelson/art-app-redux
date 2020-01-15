import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import InDepth from '../InDepth.js'
import App from '../App.js';
import Home from '../Home.js'
import NavHead from './NavHead.js';
import ArticleContainer from '../ArticleContainer';


const HomePage = () => (
    <div>
        <NavHead />
        <Home />
    </div>
);

const InDepthPage = () => (
    <div>
        <NavHead />
        <InDepth />
    </div>

);

const ArticlePage = (articleId) => (
    <div>
        <NavHead />
        <ArticleContainer id={articleId} />
    </div>

);

class Router extends Component {

    render() {
        return (


            <Locations>
                <Location path="/" handler={HomePage} />
                <Location path="/InDepth" handler={InDepthPage} />
                <Location path="/Article/:articleId" handler={ArticlePage} />
            </Locations>

        );
    }
}

export default Router;