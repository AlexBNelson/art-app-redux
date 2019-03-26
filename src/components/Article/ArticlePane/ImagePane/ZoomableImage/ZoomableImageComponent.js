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

/*getDefaultProps: function () {
    return {
      // allow the initial position to be passed in as a prop
      initialPos: {x: 0, y: 0}
    }
  },
  getInitialState: function () {
    return {
      pos: this.props.initialPos,
      dragging: false,
      rel: null // position relative to the cursor
    }
  },
  // we could get away with not having this (and just having the listeners on
  // our div), but then the experience would be possibly be janky. If there's
  // anything w/ a higher z-index that gets in the way, then you're toast,
  // etc.
  componentDidUpdate: function (props, state) {
    if (this.state.dragging && !state.dragging) {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    } else if (!this.state.dragging && state.dragging) {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }
  },

  // calculate relative position to the mouse and set dragging=true
  onMouseDown: function (e) {
    // only left mouse button
    if (e.button !== 0) return
    var pos = $(this.getDOMNode()).offset()
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.left,
        y: e.pageY - pos.top
      }
    })
    e.stopPropagation()
    e.preventDefault()
  },
  onMouseUp: function (e) {
    this.setState({dragging: false})
    e.stopPropagation()
    e.preventDefault()
  },
  onMouseMove: function (e) {
    if (!this.state.dragging) return
    this.setState({
      pos: {
        x: e.pageX - this.state.rel.x,
        y: e.pageY - this.state.rel.y
      }
    })
    e.stopPropagation()
    e.preventDefault()
  },