import React from 'react'
import PropTypes from 'prop-types'
import '../../../../../Article.css'
import arrowRight from '../../../../../arrowLeft.png'
import { Component } from 'react'
import axios from 'axios'
import base64Img from 'base'

class ZoomableImageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            zoomState: 1,
            dragMode: false,
            mouseDownX: 0,
            mouseDownY: 0,
            imageDiffX: 0,
            imageDiffY: 0,
            currentX: 0,
            currentY: 0
        };
        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.setState({ zoomState: 1 })
    }

    zoomIn() {
        this.setState({ zoomState: this.state.zoomState - 1 })
    }

    zoomOut() {
        this.setState({ zoomState: this.state.zoomState+1 })

    }

    

    _onMouseDown(event) {
        this.setState({ dragMode: true })
        this.setState({ mouseDownX: event.pageX })
        this.setState({ mouseDownY: event.pageY })
    }

    _onMouseUp(event) {
        this.setState({ dragMode: false })
    }

    _onMouseMove(event) {
        if (this.state.zoomState != 0) {
            this.setState({ imageDiffX: event.pageX-this.state.mouseDownX })
            this.setState({ imageDiffY: event.pageY - this.state.mouseDownY })
        }
    }


    render() {
        var zoomInDisabled

        var zoomOutDisabled

        if (this.state.zoomState == 0) {
            zoomInDisabled == true;
        }
        else {
            zoomInDisabled == false;
        }

        if (this.state.zoomState == 2) {
            zoomOutDisabled == true;
        }
        else {
            zoomOutDisabled == false;
        }

        var zoomState = "zoom-img-" + this.state.zoomState;
        
        var objectPosition;

        if (zoomState != 0) {

            if ((this.state.currentX - this.state.imageDiffX) < 0) {

                this.setState({ currentX: this.state.currentX - this.state.imageDiffX })

                this.setState({ currentY: this.state.currentY - this.state.imageDiffY })

                var bottomX = this.state.currentX + 'px'

                var bottomY = this.state.currentY + 'px'

                objectPosition = {
                    bottom: { bottomX },
                    left: { bottomY }
                }
            }    
        }


        return (
            <div class="zoom-img-div">
                <button class="img-zoom-btn" disabled={zoomInDisabled} onClick={this.zoomIn.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                <button class="img-zoom-btn" disabled={zoomOutDisabled} onClick={this.zoomOut.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                <img ref={this.imageRef} style={objectPosition} className={zoomState} onMouseMove={this._onMouseMove.bind(this)} onMouseDown={this._onMouseDown.bind(this)} onMouseUp={this._onMouseUp.bind(this)} src={this.props.imgSrc} />
                </div>
            )
    }
}



export default ZoomableImageComponent;