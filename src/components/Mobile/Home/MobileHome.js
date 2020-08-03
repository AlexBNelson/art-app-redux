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
                <div class="mobile-site-intro">Welcome to Dyptych, an online museum curating the most compelling stories in art from across history and the globe, in a unique side-by-side format. Enjoy and Explore! </div>
                
                <MobileCarousel class="mobile-carousel" centerMode={true} />

            </div>
        )
    }
}

export default Home;