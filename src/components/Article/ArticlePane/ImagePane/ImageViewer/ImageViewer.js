import React from 'react'
import '../../../../../Article.css'
import { Component } from 'react'
import OpenSeadragon from 'openseadragon';
import fullscreen from '../../../../../fullscreen.svg';

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
            <button id="zoom-in">
              Zoom In
            </button>
            <button id="zoom-out">
              Zoom Out
            </button>
            <button id="reset">
              Reset Zoom
            </button>
            <button id="full-screen">
              Toggle Fullscreen
            </button>
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
                defaultZoomLevel: 0,
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
                    
                    {isIntro ? <div id="seadragon" class="article-image-pane-intro"></div>: <div id="seadragon" class="article-image-pane">{this.renderZoomControls()}</div>} 
                
                    
                </ul>
                
            </div>
            );
        }
    }
    
export default ImageViewer;