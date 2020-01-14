import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css';
import '../../bootstrap.css'
import { setArticleData } from '../../../../actions'



class ArticleThumbnailComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageLink: '',
            articleTitle: ''
        };
    }

    componentDidMount() {

    }

    onSelect() {

        var articleData = {};

        axios({
            method: 'get',
            url: infoUrl
        })
            .then(response => articleData = response.data)
            .catch(function (error) {
                window.alert(error);

            });

        dispatch(setArticleData(articleData))

        return true;
    }

    render() {

        var link = "Article/" + this.props.id
        return (
            <div class="thumbnail-container" className={this.props.position}>
                <a href={link} onClick={this.nextPage.onSelect(this)}><img class="thumbnail-image" src={this.state.imageLink} /></a>
                <div class="thumbnail-title">{this.state.articleTitle}</div>
            </div>
        )
    }
}

export default ArticleThumbnailComponent;