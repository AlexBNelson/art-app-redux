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
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id="Exekias: From Fine Craftsman to True Artist" />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;