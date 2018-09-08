import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';
import '../Article.css'


class InDepth extends Component {

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 featured-article-title-box feature-article-div">
                        </div>
                    <div class="col-8 featured-article-container feature-article-div">
                        <img class="featured-article-image img-responsive" src="http://localhost:58282/featuredArticle1"/>
                    </div>
                
                </div>
                <div class="row">
                    <div class="col-4 featured-article-title-box feature-article-div">
                    </div>
                    <div class="col-8 featured-article-container feature-article-div">
                        <img class="featured-article-image img-responsive" src="http://localhost:58282/featuredArticle2" />
                    </div>

                </div>
                <div class="row">
                    <div class="col-4 featured-article-title-box feature-article-div">
                        <a class="dropdown-item" href="/Exekias">Exploring Exekias</a>

                    </div>
                    <div class="col-8 featured-article-container feature-article-div">
                        <img class="img-responsive mx-auto d-block featured-article-image" src="http://localhost:58282/featuredArticle1" />
                    </div>

                </div>
            </div>

        );
    }
}

export default InDepth;