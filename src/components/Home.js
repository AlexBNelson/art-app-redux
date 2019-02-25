import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../bootstrap.css'



class Home extends Component {

    render() {
        return (
            <div class="container">
            <div class="row home-row">
                    <div class="col-lg-6 home-cell container">
                        <div class="row">
                            <div class="col-lg-6 home-article">
                                </div>
                            <div class="col-lg-6 home-article">
                                        </div>
                            </div>
                </div>
                    <div class="col-lg-6 home-cell container">
                        <div class="row home-article">
                            </div>
                        <div class="row home-article">
                            </div>
                        </div>
                </div>
                <div class="row home-row">
                <div class="col-lg-6 home-cell container">
                    <div class="row home-article">
                    </div>
                    <div class="row home-article">
                    </div>
                </div>
                <div class="col-lg-6 home-cell container">
                    <div class="row">
                    <div class="col-lg-6 home-article">
                        </div>
                    <div class="col-lg-6 home-article">
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            )

      
    }
}

export default Home;