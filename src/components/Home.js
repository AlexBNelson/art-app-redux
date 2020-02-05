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

        return (
            <div class="home">
                <div class="site-intro">Welcome to Dyptych! Immerse yourself in the history, drama, scandal and brilliance behind the most significant and powerful works of art, accompanied by vivid, full-height images. </div>
                
                <ArticleCarousel centerMode={true} />

            </div>
        )
    }
}

export default Home;