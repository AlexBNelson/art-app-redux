import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css';
import '../../bootstrap.css'



class SiteIntroComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLink: '',
            articleTitle: ''
        };
    }

   

    render() {
        
        return (
            <div class="site-intro">
                Welcome to Dyptych ("dip-tick")! Immerse yourself in the most significant and powerful works of Art presented in highest definition, alongside analysis that helps unpack the secrets of their genius.   
            </div>
        )
    }
}

export default SiteIntroComponent;