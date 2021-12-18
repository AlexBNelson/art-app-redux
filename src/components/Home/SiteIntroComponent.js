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
                   
            </div>
        )
    }
}

export default SiteIntroComponent;