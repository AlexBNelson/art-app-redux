import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../bootstrap.css';
import '../../Article.css'
import TextPane from './ArticlePane/TextPane';
import ImagePaneContainer from './ArticlePane/ImagePane/ImagePaneContainer'


class ArticlePane extends Component {

    render() {
        return (
           
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <ImagePaneContainer/>
                    </div>
                    <div class="col-6">
                        <TextPane/>
                    </div>

                </div>
                </div>

        );
    }
}

export default ArticlePane;