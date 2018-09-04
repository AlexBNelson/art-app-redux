import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import  InDepth from '../InDepth.js'
import App from '../App.js';
import  Home from '../Home.js'
import NavHead from './NavHead.js';
import Article from '../Components/Article.js';


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

const ArticlePage = () => (
    <div>
        <NavHead />
        <Article />
    </div>

);

class Router extends Component {
    
    render() {
        return (
            

            <Locations>
                <Location path="/" handler={HomePage} />
                <Location path="/InDepth" handler={InDepthPage} />
                <Location path="/Exekias" handler={ArticlePage} />
            </Locations>

        );
    }
}

export default Router;