import React from 'react'
import PropTypes from 'prop-types'
import '../../../../Article.css'
import { Component } from 'react'
import axios from 'axios'
import base64Img from 'base'
import ZoomableImageComponent from './ZoomableImage/ZoomableImageComponent.js'

class ImagePaneComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageUrls: [],
            zoomState: 1
        };
    }

    componentDidMount() {
        var imageLinks = [];

        const imageLinksUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/ImageLinks/0';
        
        axios({
            method: 'get',
            url: imageLinksUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(function (response) {
                
                var str1 = response.data.replace("]", "")
                var str2 = str1.replace("[", "")
                var array = str2.split(",")
                console.log(response.data)

                var i;

                for (i = 0; i < array.length; i++) {
                    if (array[i].substring(1, array[i].length - 1).includes("https")) {
                        var element = array[i].substring(1, array[i].length) + "," + array[i+1].substring(0, array[i + 1].length - 1);
                        imageLinks.push(element)
                    }
                }
            }
            )
            .catch(function (error) {
                console.log(error);

            });

        this.setState({ imageUrls: imageLinks })
    }

    zoomIn() {
        if (this.state.zoomState > 0) {
            this.setState({ zoomState: this.state.zoomState - 1 })
        }
    }

    zoomOut() {
        if (this.state.zoomState < 2) {
            this.setState({ zoomState: this.state.zoomState + 1 })
        }

    }

    render() {

        var images = [];

        var i;
        
        console.log(this.state.imageUrls)
        console.log("imageSource = " + this.props.imageSource)
        //Push images to image[] array, if the index of the image is not the same as the imageSource, it is invisible
        for (i = 0; i < this.state.imageUrls.length; i++) {
            
            if (this.props.imageSource-1 != i) {

                var a = <img class="article-image-pane-img" src={this.state.imageUrls[i]} style={{ display: 'none' }} />
            }
            else {
                console.log("viewstate =" + this.props.viewState)
                var a = <img class="article-image-pane-img" src={this.state.imageUrls[i]}/>
            }
            images.push(a)
        }

        var zoomState = "zoom-img-" + this.state.zoomState;

        return (

            <ul>
                <button class="img-zoom-btn" disabled={zoomInDisabled} onClick={this.zoomIn.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                <button class="img-zoom-btn" disabled={zoomOutDisabled} onClick={this.zoomOut.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                <div class="article-image-pane">
                        {images[0]}
                        {images[1]}
                        {images[2]}
                        {images[3]}
                        {images[4]}
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