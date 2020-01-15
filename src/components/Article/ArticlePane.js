import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../bootstrap.css';
import '../../Article.css'
import TextPaneContainer from './ArticlePane/TextPane/TextPaneContainer';
import ImagePaneContainer from './ArticlePane/ImagePane/ImagePaneContainer'


class ArticlePane extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (

            <div class="container-fluid">
                <div class="row">
                    <div class="col-6 article-image-div">
                        <ImagePaneContainer article={this.props.article} id={this.props.id} />
                    </div>
                    <div class="col-6 article-text-div">
                        <TextPaneContainer article={this.props.article} id={this.props.id} />
                    </div>

                </div>
            </div>

        );
    }
}

export default ArticlePane;