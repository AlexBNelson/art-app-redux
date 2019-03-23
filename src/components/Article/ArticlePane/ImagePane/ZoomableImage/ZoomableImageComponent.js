import React from 'react'
import PropTypes from 'prop-types'
import '../../../../../Article.css'
import arrowRight from '../../../../../arrowLeft.css'
import { Component } from 'react'
import axios from 'axios'
import base64Img from 'base'

class ZoomableImageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            zoomState: 1
        };
    }

    componentDidMount() {
        
    }

    zoomIn() {
        this.setState({ zoomState: this.state.zoomState - 1 })
    }

    zoomOut() {
        this.setState({ zoomState: this.state.zoomState+1 })

    }

    render() {

        return (
            <div class="article-image-pane-img">
                <button class="img-zoom-btn" onClick={this.zoomIn.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                <button class="img-zoom-btn" onClick={this.zoomOut.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                <img src={this.props.id} />
                </div>
            )
    }
}



export default ZoomableImageComponent