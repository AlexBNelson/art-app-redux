import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../App.css';
import Bootstrap from 'bootstrap';
import '../bootstrap.css';
import ArticlePane from './Article/ArticlePane.js';
import '../Article.css'
import { connect } from 'react-redux'
import { setArticleData } from '../actions'
import axios from "axios"

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: null
        };
    }

    render() {


            return (
                <div class="about">
                    <p>All Text, Design and Source Code Copyright Dyptych/Alex Nelson 2020. Refer to original institutions for image rights.</p>
                    <a href="https://www.nationalgallery.org.uk/paintings/glossary/diptych" target="_blank">What is a diptych?</a>
                    <p>Logo Background Image: <span class="italic-about">Mont St. Victoire</span>, Paul Cezanne</p>
                    <p>Dyptych aims to combine the elements of image-centric design, rigorous interpretation and compelling storytelling to create an engaging digital experience</p>
                </div>)
        }
    }

    export default (About)