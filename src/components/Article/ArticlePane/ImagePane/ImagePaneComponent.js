import React from 'react'
import PropTypes from 'prop-types'
import ImageDetailsPane from './ImageDetailsPane';
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

        for (i = 0; i < this.state.imageUrls.length; i++) {
            var a = <img class="article-image-pane-img" src={this.state.imageUrls[i]} />
            images.push(a)
        }

        return (

            <ul>
                <div class="article-image-pane">
                    <div class="image-details-pane  navbar-light bg-light">
                        <ImageDetailsPane />
                    </div>
                    <div className={this.props.viewState ? 'visible' : 'hidden'}>
                        {images[parseInt(this.props.imageSource, 10)]}
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