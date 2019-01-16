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

        const imageLinksUrl = 'https://dyptych-fa.azurewebsites.net/api/' + this.props.id + '/ImageLinks/0';
        
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
                

                var i;

                for (i = 0; i < array.length; i++) {

                    var element = array[i].substring(1, array[i].length - 1);
                    imageLinks.push(element)

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