import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap.css'
import ArticleThumbnailContainer from './Home/ArticleThumbnailContainer.js'
import SiteIntroComponent from './Home/SiteIntroComponent.js'
import ArticleCarousel from './Home/ArticleCarousel.js'


class Home extends Component {

    

    render() {
        return (
            <div>
                <ArticleCarousel centerMode={true} />
            </div>
        )
    }
}

export default Home;