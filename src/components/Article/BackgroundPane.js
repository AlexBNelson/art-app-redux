import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../bootstrap.css';
import '../../Article.css'

class BackgroundPane extends Component {

    render() {
        return (
            <div class="background-container">
                <img class="article-background-pane" src="http://localhost:58282/articleBackground"/>
            </div>
        );
    }
}

export default BackgroundPane;