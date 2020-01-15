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
            imageLink: '',
            articleTitle: ''
        };
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {

    }

    onSelect() {
        var url = "http://localhost:7071/api/article/Exekias: From Fine Craftsman to True Artist"

        var articleData = {};

        axios({
            method: 'get',
            url: url
        })
            .then(response => articleData = response.data)
            .catch(function (error) {
                window.alert(error);

            });

        const { dispatch } = this.props;

        dispatch(setArticleData(articleData))

        return true;
    }

    render() {

        var link = "Article/" + this.props.id#
        
        return (
            <div class="thumbnail-container" className={this.props.position}>
                <a href={link} onClick={this.onSelect}><img class="thumbnail-image" src="" /></a>
                <div class="thumbnail-title">{this.state.articleTitle}</div>
            </div>
        )
    }
}

export default connect()(ArticleThumbnailComponent);