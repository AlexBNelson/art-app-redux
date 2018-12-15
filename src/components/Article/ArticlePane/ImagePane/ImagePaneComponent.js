import React from 'react'
import PropTypes from 'prop-types'
import '../../../../Article.css'
import { Component } from 'react'
import axios from 'axios'
import base64Img from 'base'

class ImagePaneComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageUrls: []
        };
    }

    componentDidMount() {
        var imageLinks = [];

        const imageLinksUrl = 'http://localhost:58282/articleContent/' + this.props.id + '/ImageLinks';

        axios({
            method: 'get',
            url: imageLinksUrl
        })
            .then(function (response) {
                var i;

                for (i = 0; i < response.data.length; i++) {
                    imageLinks.push(response.data[i])

                }
                console.log(imageLinks)
            }
            )
            .catch(function (error) {
                window.alert(error);

            });

        this.setState({ imageUrls: imageLinks })
    }

    render() {

        var images = [];

        var i;

        //Push images to image[] array, if the index of the image is not the same as the imageSource, it is invisible
        for (i = 0; i < this.state.imageUrls.length; i++) {

            if (this.props.imageSource != i) {

                var a = <img class="article-image-pane-img" src={this.state.imageUrls[i]} style={{ display: 'none' }} />
            }
            else {
                var a = <img class="article-image-pane-img" src={this.state.imageUrls[i]}/>
            }
            images.push(a)
        }

        return (

            <ul>
                <div class="article-image-pane">
                    <div class="article-image-container" className={this.props.viewState ? 'visible article-image-container' : 'hidden article-image-container'}>
                        {images[0]}
                        {images[1]}
                        {images[2]}
                        {images[3]}
                        {images[4]}
                    </div>
                </div>
            </ul>

        );
    }
}



ImagePaneComponent.propTypes = {
    viewState: PropTypes.bool.isRequired,
    imageSource: PropTypes.string.isRequired
}

export default ImagePaneComponent