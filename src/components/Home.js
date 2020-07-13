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

        //add to bottom <div class="home-footer">All content copyright Dyptych/Alex Nelson 2020</div>
        //dyptych is an online museum curating the most compelling stories in art from across history and the globe, in a unique side-by-side format.
        return (
            <div class="home">
                <div class="site-intro">Welcome to Dyptych, an online museum curating the most compelling stories in art from across history and the globe, in a unique side-by-side format. Enjoy and Explore!</div>
                
                <ArticleCarousel centerMode={true} />

            </div>
        )
    }
}

export default Home;