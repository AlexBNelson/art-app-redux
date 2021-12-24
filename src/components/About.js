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
                    <br/><br/>
                    <h2><b>About</b></h2><br/>
                    <p>Each article in Dyptych uses a series of artworks to explore a thread through art history, whether that be a particular phase in an artist's career, or the story of a civilization over many centuries. We aim to tell these stories in a readable and interesting way, in enough detail to do each artwork justice.</p>
                    <br/><p>The name is taken from the word 'diptych', (pronounced dip-tick) which is an artwork with two panels. Similar to a diptych, our articles use a format with image and text panels side-by-side, allowing you to view the artwork as you read.</p>
                    <br/>
                    <p>Dyptych respects the rights of image creators and owners. The majority of images are taken from Wikimedia and are public domain. For any copyright queries, please get in touch at dyptych@zoho.com</p>
                    
                  

                    <br/>
                    
                    <p>All Text, Design and Source Code Copyright Dyptych 2020. Refer to original institutions for image rights. Image viewer powered by OpenSeaDragon</p>
                    
                </div>)
        }
    }

    export default (About)