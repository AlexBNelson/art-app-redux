import React from 'react'
import PropTypes from 'prop-types'
import '../../../../Article.css'
import { Component } from 'react'
import OpenSeadragon from 'openseadragon';


class ImagePaneComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };


        this.imgRef = React.createRef();
        this.containerRef = React.createRef();

        this.initOpenSeaDragon.bind(this)
    }

    componentDidMount() {
        this.initOpenSeaDragon();
    }

    componentDidUpdate() {
        //delete current viewer instance before update

        this.initOpenSeaDragon();
    }

    initOpenSeaDragon() {
        var imageLink

        if (this.props.imageSource == 0) {
            imageLink = this.props.article.introPage.imageUrl
        } else if (this.props.imageSource < this.props.article.bodyPages.length) {
            imageLink = this.props.article.bodyPages[this.props.imageSource - 1].imageUrl
        } else {
            imageLink = this.props.article.appendixPage.imageUrl
        }


     OpenSeadragon({
            id: 'seadragon',
            homeButton: 'reset',
            fullPageButton: 'full-screen',
            tileSources: {
                type: 'image',
                url: imageLink,
                buildPyramid: false
            }
        });
    }

    render() {


        return (

            <ul>
                <div id="seadragon" class="article-image-pane">

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

  // https://stackoverflow.com/questions/40114942/react-button-pressed-keep-calling-function for zooming