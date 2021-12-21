import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../../../App.css';
import '../../../bootstrap.css'
import MobileCarousel from './MobileCarousel.js'



class Home extends Component {



    render() {

        //add to bottom <div class="home-footer">All content copyright Dyptych/Alex Nelson 2020</div>

        return (
            <div class="home">
                <div class="mobile-title">dyptych</div>
                <div class="mobile-site-intro">Welcome to Dyptych, where we reveal the stories of the past through the eyes of its greatest artists!</div>
                
                <MobileCarousel class="mobile-carousel" centerMode={true} />
                
            </div>
        )
    }
}

export default Home;