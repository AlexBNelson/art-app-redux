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
import homeButton from '../home-button.svg';

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
                    <br/><br/><br/>
                    <a href="/" class="home-button-about"><img class="home-img" src={homeButton}/></a>
                    <br/><br/><br/>
                    <p>Dyptych aims to tell the stories of art through close visual analysis and exploring its wider context, in an accessible and readable way</p>
                    <br/>
                    
                    <p>All Text, Design and Source Code Copyright Dyptych/Alex Nelson 2020. Refer to original institutions for image rights.</p>
                    <br/><p>Dyptych respects the rights of image creators and owners. The majority of images are taken from Wikimedia and are public domain. For any copyright queries, please get in touch at dyptych@zoho.com</p>
                    
                    <br/><p>The name is taken from the word 'diptych', which is an artwork with two panels. Similar to a diptych, in our articles we use a format with image and text side-by-side.</p>

                    <br/><br/>
                    
                    <p>Image viewer powered by OpenSeaDragon</p>
                </div>)
        }
    }

    export default (About)