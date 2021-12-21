import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap.css'
import ArticleThumbnailContainer from './Home/ArticleThumbnailContainer.js'
import SiteIntroComponent from './Home/SiteIntroComponent.js'
import ArticleSection from './Home/ArticleSection.js'
import instag from '../instag.svg'; 



class Home extends Component {

   

    render() {

        //add to bottom <div class="home-footer">All content copyright Dyptych/Alex Nelson 2020</div>
        //dyptych is an online museum curating the most compelling stories in art from across history and the globe, in a unique side-by-side format.
        return (
            <div class="home">
                <p class="title-left">dyp</p>
                <p class="title-right">tych</p>
                <div><a href="https://www.instagram.com/dyptych_art/?hl=en" target="_blank"><img class="insta-icon" src={instag} href="https://www.instagram.com/dyptych_art/?hl=en"/></a></div>
                
                <div class="site-intro">Welcome to Dyptych, where we reveal the stories of the past through the eyes of its greatest artists!</div>
                
                <ArticleSection />
                <div class="footer">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a>More Articles coming soon!</a></div>
                <div class="copyright"><a href="/About">About</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a>Copyright Dyptch 2021 ©</a></div>
            </div>
        )
    }
}

export default Home;