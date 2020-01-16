import React from 'react'
import PropTypes from 'prop-types'
import '../../../../Article.css'
import { Component } from 'react'
import axios from 'axios'
import base64Img from 'base'
import ZoomableImageComponent from './ZoomableImage/ZoomableImageComponent.js'
import arrowRight from '../../../../arrowLeft.png'
import zoomIn from '../../../../ZoomIn.png'
import zoomOut from '../../../../ZoomOut.png'
import panDown from '../../../../panDown.png'
import panLeft from '../../../../panLeft.png'
import panRight from '../../../../panRight.png'
import panUp from '../../../../panUp.png'
import OpenSeadragon from 'openseadragon';


class ImagePaneComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageUrls: [],
            zoomState: 1,
            imgLeft: 0,
            imgTop: 0,
            imageButtonsVisible: false,
            zoomCoefficient:  1
        };


        this.imgRef = React.createRef();
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        this.initOpenseadragon();
    }

    initSeaDragon() {
        var imageLink

        if(this.props.imageSource == 0){
            imageLink =  this.props.article.introPage.imageUrl
        }else if(this.props.imageSource < this.props.article.bodyPages.length){
            imageLink = this.props.article.bodyPages[this.props.imageSource - 1].imageUrl
        }else{
            imageLink =  this.props.article.appendixPage.imageUrl
        }
        
    
        OpenSeadragon({
          id: 'seadragon',
          homeButton: 'reset',
          fullPageButton: 'full-screen',
          tileSources: {
            type: 'image',
            url: imageLink,
            buildPyramid: false
          },
          showNavigator: showNavigator
        });
      }

    render() {

        
        return (

            <ul>
                <div class="image-buttons" style={zoomPaneVisibility} >
                    <div>
                        <button class="img-zoom-in-btn" disabled={zoomInDisabled} onClick={this.zoomIn.bind(this)}><img class="button-img" src={zoomIn}></img></button>
                    <button class="img-zoom-out-btn" disabled={zoomOutDisabled} onClick={this.zoomOut.bind(this)}><img class="button-img" src={zoomOut}></img></button>
                </div>
                    <div>
                        <button class="img-move-right" onClick={this.moveRight.bind(this)}><img class="button-img" src={panRight}></img></button>
                        <button class="img-move-left" onClick={this.moveLeft.bind(this)}><img class="button-img" src={panLeft}></img></button>
                        <button class="img-move-up" onClick={this.moveUp.bind(this)}><img class="button-img" src={panUp}></img></button>
                        <button class="img-move-down" onClick={this.moveDown.bind(this)}><img class="button-img" src={panDown}></img></button>
                    </div>
                    </div>
                <div id="seadragon" ref={this.containerRef} class="article-image-pane">
                        
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