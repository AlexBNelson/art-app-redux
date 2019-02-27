import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap.css'
import ArticleThumbnailComponent from './Home/ArticleThumbnailComponent.js'



class Home extends Component {

//     <div class="row home-row">
//    <div class="col-lg-6 home-cell container">
//        <div class="row home-inner-row">
//            <div class="home-article-col">
//            </div>
//            <div class="home-article-col">
//            </div>
//        </div>
//    </div>
//    <div class="col-lg-6 home-cell container">
//        <div class="row home-article-row">
//        </div>
//        <div class="row home-article-row">
//        </div>
//    </div>
//</div>
//    <div class="row home-row">
//        <div class="col-lg-6 home-cell container">
//            <div class="row home-article-row">
//            </div>
//            <div class="row home-article-row">
//            </div>
//        </div>
//        <div class="col-lg-6 home-cell container">
//            <div class="row home-inner-row">
//                <div class="home-article-col">
//                </div>
//                <div class="home-article-col">
//                </div>
//            </div>
//        </div>
//    </div>

    render() {
        return (
            <div class="container-fluid home-container">
                <div class="row">
                    <div class="col-lg-2">
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                    <div class="col-lg-2">
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                        <ArticleThumbnailComponent href="/Article/c0ee64d3-14c4-41cc-9548-c371118c32ab" id='c0ee64d3-14c4-41cc-9548-c371118c32ab' />
                    </div>
                </div>
                    </div>
            )
    }
}

export default Home;