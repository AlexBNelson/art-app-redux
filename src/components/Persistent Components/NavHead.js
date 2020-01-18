
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../bootstrap.css';
import Bootstrap from 'bootstrap';
import { Link } from 'react-router-component';

class NavHead extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light nav-head navbar-fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img class="dyptych-logo" src="https://ucarecdn.com/6330425f-1126-420c-8438-414d62714b0a/dyptychLogo.svg" />   (In Development, Copyright Alex Nelson 2020)</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link class="nav-link" href="/">Home</Link>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/InDepth">InDepth</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div class="dropdown-menu" onClick={this.toggleOpen} aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Fine Art</a>
                                        <a class="dropdown-item" href="#">Photography</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Architecture</a>
                                    </div>
                                </li>
                            </ul>
                        </div></div>
                </nav>
            </div>
        );
    }
}

export default NavHead;
