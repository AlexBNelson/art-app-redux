
import React, { Component } from 'react';
import '../../../bootstrap.css';
import '../../../Article.css';
import TextPaneContainer from './TextPane/TextPaneContainer'
import ImagePaneContainer from './ImagePane/ImagePaneContainer'
import axios from 'axios';
import '../Mobile.css'


class MobileArticle extends Component {

    constructor(props){
        super(props);
        this.state = {
            article: null
        };
    }

    componentWillMount(){

        var url = "https://dyptych-api.azurewebsites.net/api/article/" + this.props.id.articleId

        var articleData = {};

        const { dispatch } = this.props;

        var self = this;

        axios({
            method: 'get',
            url: url
        })
            .then(function (response) {
                console.log(response);
                articleData = response.data
                self.setState({article: articleData});
            })
            .catch(function (error) {
                window.alert(error);
            });

            
    }

    render() {
        if(this.state.article === null){
            return null;
        }

        var self = this;

        return (
            

            <div class="container-fluid">
                <div class="row mobile-image-pane">
                        <ImagePaneContainer article={self.state.article} id={self.props.id.articleId} />
                </div>
                    
                    
                <div class="row mobile-text-pane">
                        <TextPaneContainer article={self.state.article} id={self.props.id.articleId} />
                </div>

            </div>

        );
    }
}

export default MobileArticle;