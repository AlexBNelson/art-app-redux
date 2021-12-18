import React from 'react'
import PropTypes from 'prop-types'
import '../../../../Article.css'
import { Component } from 'react'
import ImageViewer from './ImageViewer/ImageViewer.js';


class ImagePaneComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        var imageLink;

        var introLabel;

        var isIntro = false;

        if (this.props.imageSource == 0) {
            isIntro = true;
            imageLink = this.props.article.introPage.imageUrl
            introLabel = <p class="mobile-intro-label">{this.props.article.introPage.imageLabel}</p>
        } else if (this.props.imageSource <= this.props.article.bodyPages.length) {
            imageLink = this.props.article.bodyPages[this.props.imageSource - 1].imageUrl
        } else {
            imageLink = this.props.article.appendixPage.imageUrl
        }

        var randomKey =  Math.random()


        return (

            <ul>
                <ImageViewer isIntro={isIntro} key={randomKey} imageLink={imageLink}/>
                {introLabel}
            </ul>

        );
    }
}



ImagePaneComponent.propTypes = {
    viewState: PropTypes.bool.isRequired,
    imageSource: PropTypes.string.isRequired
}

export default ImagePaneComponent

  // https://stackoverflow.com/questions/40114942/react-button-pressed-keep-calling-function for zooming