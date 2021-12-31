import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css';
import '../../bootstrap.css'
import { connect } from 'react-redux'
import './Carousel.css'



class FeaturedArticlelComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            thumbnail: {},
            expanded: false
        };
    }


    componentWillMount(){

        var url = "https://dyptych-api.azurewebsites.net/api/thumbnail/" + this.props.id;

        var self = this;

        axios({
            method: 'get',
            url: url
        })
            .then(function (response) {
                console.log(response);
                var thumbnailData = response.data
                self.setState({thumbnail: thumbnailData});
            })
            .catch(function (error) {
                window.alert(error);
            });  
    }

    render() {

        var link = "https://dyptych.co.uk/Article/" + this.props.id

        var thumbnail = this.state.thumbnail;

        var titleStyle;

        var self = this;

        return (
            <div  class="featured-container" >
                <a href={link}><img class="featured-image" src={thumbnail.imageUri} /></a>
                <div class="featured-title">Featured: {thumbnail.title}<p class="featured-description">Gustave Caillebotte bankrolled the Impressionists, but often did not paint like them. He had his own ideas about how to paint modernity, and they centred around the newly rebuilt Paris of the 1870s. </p></div>
                
            </div>
        )
    }
}

export default connect()(FeaturedArticlelComponent);