import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../../bootstrap.css';
import '../../../Article.css';
import ImageDetailsPane from './ImagePane/ImageDetailsPane.js';



class TodoList extends Component {

    render() {

        const { viewState } = this.props;
        const src = "http://localhost:58282/featuredArticle1"

        return (
            <div class="article-image-pane">
                <div visibility={viewState}>
                <div class="image-details-pane  navbar-light bg-light">
                    <ImageDetailsPane />
                </div>

                    <img class="article-image-pane-img" src={src} />
                    </div>
            </div>

        );
    }
}



export default TodoList;