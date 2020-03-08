import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import InDepth from '../InDepth.js'
import App from '../App.js';
import Home from '../Home.js'
import NavHead from './NavHead.js';
import NavHeadHome from './NavHeadHome.js';
import ArticleContainer from '../ArticleContainer';
import About from '../About';
import MobileArticle from '../Mobile/Article/MobileArticle.js'
import MobileHome from '../Mobile/Home/MobileHome.js'


const HomePage = () => (
    <div>
        <NavHeadHome />
        <Home />
    </div>
);

const AboutPage = () => (
    <div>
        <NavHeadHome />
        <About />
    </div>

);

const ArticlePage = (articleId) => (
    <div>
        <NavHead />
        <ArticleContainer id={articleId} />
    </div>
);

const MobileHomePage = () => (
    <div>
        <NavHead />
        <MobileHome />
    </div>
);

const MobileArticlePage = (articleId) => (
    <div>
        <NavHead />
        <MobileArticle id={articleId} />
    </div>
);

class Router extends Component {

    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }

    render() {

        const { width } = this.state;
        const isMobile = width <= 500;

        var desktop = (<Locations>
            <Location path="/" handler={HomePage} />
            <Location path="/About" handler={AboutPage} />
            <Location path="/Article/:articleId" handler={ArticlePage} />
        </Locations>)

        var mobile = (<Locations>
            <Location path="/" handler={MobileHomePage} />
            <Location path="/About" handler={MobileArticlePage} />
            <Location path="/Article/:articleId" handler={MobileArticlePage} />
        </Locations>)

        if(isMobile) {
            return mobile;
        }else{
            return desktop;
        }
    }
}

export default Router;