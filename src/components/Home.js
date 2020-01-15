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
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailContainer id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;