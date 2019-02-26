import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import logo from '../logo.svg';
import axios from 'axios'
import '../App.css';
import '../bootstrap.css'



class ArticleThumbnailComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLink: '',
            articleTitle: ''
        };
    }

    componentDidMount() {

        const imageLinkUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/ImagePositions/0';

        axios({
            method: 'get',
            url: imageLinkUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(function (response) {
                
            }
            )
            .catch(function (error) {
                window.alert(error);

            });

        const articleTitleUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/ImagePositions/0';

        axios({
            method: 'get',
            url: articleTitleUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(function (response) {

            }
            )
            .catch(function (error) {
                window.alert(error);

            });

    }

    render() {
        return (
            <div>
                <a><img src={this.state.imageLink} /></a>
                <div></div>
            </div>
        )
    }
}

export default Home;