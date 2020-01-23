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
                    <div class="col-lg-4 container">
                        <row>
                            <SiteIntroComponent />
                        </row>
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>]
                </div>
                <div class="row">
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259" />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;