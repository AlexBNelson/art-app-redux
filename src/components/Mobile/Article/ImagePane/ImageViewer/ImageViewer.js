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

    renderZoomControls(){
        return (
          <div class="image-toolbar">
            <button id="full-screen">
              Toggle Fullscreen
            </button>
          </div>
        );
      };

    initOpenSeaDragon() {
        var imageLink = this.props.imageLink

        this.setState({
            viewer: OpenSeadragon({
                id: 'seadragon',
                fullPageButton: 'full-screen',
                tileSources: {
                    type: 'image',
                    url: imageLink,
                    zoomInButton: 'zoom-in',
                    zoomOutButton: '',
                    homeButton: 'reset',
                    fullPageButton: 'full-page',
                    buildPyramid: false
                }
            })
        });
    }

    render() {

        return (
            <div>
                
                <ul>
                    <div id="seadragon" class="mobile-seadragon-viewer">
                        {this.renderZoomControls()}
                    </div>
                </ul>
                
            </div>
            );
        }
    }
    
export default ImageViewer;