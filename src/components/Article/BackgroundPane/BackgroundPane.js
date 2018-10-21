import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../../bootstrap.css';
import '../../../Article.css'

class BackgroundPane extends Component {

    

    render() {
        //Logic for fading background image
        var opacityValue = 0.8 - (this.props.articleScrollValue / 700)

        if (opacityValue < 0.3) {
            opacityValue = 0.3
        }

        const imgStyle = {
            opacity: opacityValue
        };

        return (
            <div class="background-container">
                <img class="article-background-pane" style={imgStyle} src="http://localhost:58282/articleBackground" />
            </div>
        );
    }
}

export default BackgroundPane;