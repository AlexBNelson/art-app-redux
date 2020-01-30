import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap.css'
import ArticleThumbnailContainer from './Home/ArticleThumbnailContainer.js'
import SiteIntroComponent from './Home/SiteIntroComponent.js'



class Home extends Component {

    

    render() {
        return (
            <div class="container-fluid home-container">
                <div class="row">
                    <button class="carousel-left"/>
                    <div class="col-lg-3">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <div class="col-lg-3">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <div class="col-lg-3">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <div class="col-lg-3">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <button class="carousel-right"/>
                </div>
                <div class="row">

                </div>
            </div>
        )
    }
}

export default Home;