
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../bootstrap.css';
import Bootstrap from 'bootstrap';
import { Link } from 'react-router-component';
import instagram from '../../instagram.svg'; 
import copyright from '../../Copyright.svg'; 
import '../../App.css';
import './Mobile.css';

class NavHeadMobile extends Component {
    render() {

        const isIE = /*@cc_on!@*/false || !!document.documentMode;

        const isEdge = !isIE && !!window.StyleMedia;

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light nav-head navbar-fixed-top">
                    <div class="container-fluid">
                        
                        <a class="navbar-brand dyptych-logo-container" href="/">
                            {isEdge ? <img class="mobile-dyptych-logo" src='https://dyptycharticles.blob.core.windows.net/images/dyptychLogoSitkaIE.svg' />
                            : <img class="mobile-dyptych-logo" src='https://dyptycharticles.blob.core.windows.net/images/dyptychLogoSitka.svg'/>}
                        </a>
                        

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link class="nav-link" href="/">Home</Link>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/About">About</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Articles
                                    </a>
                                    <div class="dropdown-menu" onClick={this.toggleOpen} aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Fine Art</a>
                                        <a class="dropdown-item" href="#">Photography</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Architecture</a>
                                    </div>
                                </li>
                                <Link class="insta-link" target="_blank" to="https://www.instagram.com/dyptych_art" href="https://www.instagram.com/dyptych_art"><img class="insta" src={instagram}/></Link>
                                <img class="copyright" src={copyright}/>
                            </ul>
                            
                        </div></div>
                </nav>
            </div>
        );
    }
}

export default NavHeadMobile;
