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
    }

    componentDidMount() {

    }

    render() {

        var link = "Article/" + this.props.id

        return (
            <div class="thumbnail-container" className={this.props.position}>
                <a href={link}><img class="thumbnail-image" src="" /></a>
                <div class="thumbnail-title">{this.state.articleTitle}</div>
            </div>
        )
    }
}

export default connect()(ArticleThumbnailComponent);