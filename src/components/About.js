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
                    <br/><br/><br/><br/><br/><br/>
                    <p>Hi, I'm Alex, and I have a passion for Art and Web Development. I created Dyptych to combine the elements of image-centric design, rigorous interpretation and storytelling to create an deep and engaging digital art experience</p>
                    <br/><br/>
                    <p>All Text, Design and Source Code Copyright Dyptych/Alex Nelson 2020. Refer to original institutions for image rights.</p>
                    <p>Dyptych respects the rights of image creators and owners. For any copyright queries, please get in touch at dyptych@zoho.com</p>
                    <a href="https://www.nationalgallery.org.uk/paintings/glossary/diptych" target="_blank">What is a diptych?</a>
                    <br/><br/>
                    <p>Logo Background Image: <span class="italic-about">Mont St. Victoire</span>, Paul Cezanne</p>
                    <p>Image viewer powered by OpenSeaDragon<img class="osd-logo" src="https://avatars2.githubusercontent.com/u/3392630?s=200&v=4"/></p>
                </div>)
        }
    }

    export default (About)