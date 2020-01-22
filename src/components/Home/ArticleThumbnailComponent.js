import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css';
import '../../bootstrap.css'
import { setArticleData } from '../../actions'
import { connect } from 'react-redux'



class ArticleThumbnailComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            thumbnail: {}
        };
    }


    componentWillMount(){


        
        var url = "http://localhost:7071/api/thumbnail/" + this.props.id;

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

        var link = "Article/" + "c0ee"

        var thumbnail = this.state.thumbnail;

        return (
            <div class="thumbnail-container" className={this.props.position}>
                <a href={link}><img class="thumbnail-image" src={thumbnail.imageUri} /></a>
                <div class="thumbnail-title">{thumbnail.title}</div>
            </div>
        )
    }
}

export default connect()(ArticleThumbnailComponent);