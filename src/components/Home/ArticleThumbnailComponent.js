import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css';
import '../../bootstrap.css'



class ArticleThumbnailComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLink: '',
            articleTitle: ''
        };
    }

    componentDidMount() {

        const imageLinkUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + 'Url?code=zF45E2dH8FYsKMHo6I3wo51lw0BX8a8h5/n9hC51n04VBoQFNg/f0w==';

        axios({
            method: 'get',
            url: imageLinkUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(response => this.setState({ imageLink: response.data })
            )
            .catch(function (error) {
                window.alert(error);

            });

        const articleTitleUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + 'Title?code=zF45E2dH8FYsKMHo6I3wo51lw0BX8a8h5/n9hC51n04VBoQFNg/f0w==';

        axios({
            method: 'get',
            url: articleTitleUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(response => this.setState({ articleTitle: response.data })
            )
            .catch(function (error) {
                window.alert(error);

            });

    }

    render() {
        return (
            <div class="thumbnail-container">
                <a><img class="thumbnail-image" src={this.state.imageLink} /></a>
                <div class="thumbnail-title">{this.state.articleTitle}</div>
            </div>
        )
    }
}

export default ArticleThumbnailComponent;