import React from 'react'
import '../../../../../Article.css'
import { Component } from 'react'
import OpenSeadragon from 'openseadragon';

class ImageViewer extends Component {
  
    constructor(props) {
        super(props)
        
        this.initOpenSeaDragon.bind(this)
    }

    componentDidMount() {
      this.initOpenSeaDragon();
    }

    initOpenSeaDragon() {
        var imageLink = this.props.imageLink

        this.setState({
            viewer: OpenSeadragon({
                id: 'seadragon',
                homeButton: 'reset',
                fullPageButton: 'full-screen',
                tileSources: {
                    type: 'image',
                    url: imageLink,
                    buildPyramid: false
                }
            })
        });
    }

    render() {

        return (

            <ul>
                <div id="seadragon" class="article-image-pane"></div>
            </ul>

        );
    }
  }
  
  export default ImageViewer;