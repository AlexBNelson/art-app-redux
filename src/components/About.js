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
                    <p>All Text Copyright Dyptych/Alex Nelson 2020. Refer to original institutions for image rights.</p>
                </div>)
        }
    }

    export default (About)