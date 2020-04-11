import React from 'react'
import '../../../../../Article.css'
import { Component } from 'react'
import OpenSeadragon from 'openseadragon';
import '../../../Mobile.css';

class ImageViewer extends Component {

    constructor(props) {
        super(props)

        this.initOpenSeaDragon.bind(this)
    }

    componentDidMount() {
        this.initOpenSeaDragon();
    }

    renderZoomControls(){

      var imageCreditPara;

      if(this.props.imageCredit!=null){
        imageCreditPara = <p class="image-credit"><span class="italic-style">Credit: </span>{this.props.imageCredit}</p>;
      }

        return (
          <div class="mobile-image-toolbar">
            <button id="zoom-in" class="mobile-zoom-in">
              Zoom In
            </button>
            <button id="zoom-out" class="mobile-zoom-out">
              Zoom Out
            </button>
            <button id="reset" class="mobile-reset">
              Reset Zoom
            </button>
            <button id="full-screen" class="mobile-full-screen">
              Toggle Fullscreen
            </button>
            {imageCreditPara}
          </div>
        );
      };

    initOpenSeaDragon() {
        var imageLink = this.props.imageLink

        if(this.props.isIntro){
          this.setState({
            viewer: OpenSeadragon({
                id: 'seadragon',
                fullPageButton: 'full-screen',
                zoomInButton: 'zoom-in',
                zoomOutButton: 'zoom-out',
                homeButton: 'reset',
                defaultZoomLevel: 1.05,
                zoomPerScroll: 1,
                zoomPerClick: 1,
                panVertical: false,
                panHorizontal: false,
                tileSources: {
                    type: 'image',
                    url: imageLink,
                    fullPageButton: 'full-screen',
                    buildPyramid: false
                }
            })
        });

        }else{
          this.setState({
            viewer: OpenSeadragon({
                id: 'seadragon',
                fullPageButton: 'full-screen',
                zoomInButton: 'zoom-in',
                zoomOutButton: 'zoom-out',
                homeButton: 'reset',
                tileSources: {
                    type: 'image',
                    url: imageLink,
                    fullPageButton: 'full-screen',
                    buildPyramid: false
                }
            })
        });
        }

        
    }

    render() {

        var isIntro = this.props.isIntro

        return (
            <div>
                
                <ul>
                    
                    {isIntro ? <div id="seadragon" class="mobile-seadragon-viewer-intro"></div>: <div id="seadragon" class="mobile-seadragon-viewer">{this.renderZoomControls()}</div>} 
                
                    
                </ul>
                
            </div>
            );
        }
    }
    
export default ImageViewer;