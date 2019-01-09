import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../../bootstrap.css';
import '../../../Article.css'
import axios from 'axios'

class BackgroundPane extends Component {

    constructor(props) {
        super(props)
        this.state = {
            backgroundImageUrl: ""
        };
    }

    componentDidMount() {
        var backgroundImageLinkUrl = 'https://dyptych-fa.azurewebsites.net/api/' + this.props.id + '/BackgroundImage/0';
        

        axios({
            method: 'get',
            url: backgroundImageLinkUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(function (response) {
                this.state.backgroundImageUrl = response.data;
            }
            )
            .catch(function (error) {
                window.alert(error);

            });


    }
    

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
                <img class="article-background-pane" style={imgStyle} src={this.state.backgroundImageUrl} />
            </div>
        );
    }
}

export default BackgroundPane;