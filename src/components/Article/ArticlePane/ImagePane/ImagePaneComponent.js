import React from 'react'
import PropTypes from 'prop-types'
import '../../../../Article.css'
import { Component } from 'react'
import axios from 'axios'
import base64Img from 'base'
import ZoomableImageComponent from './ZoomableImage/ZoomableImageComponent.js'
import arrowRight from '../../../../arrowLeft.png'

class ImagePaneComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imageUrls: [],
            zoomState: 1,
            imgLeft: 0,
            imgTop: 0
        };


        this.componentRef = React.createRef();
    }

    componentDidMount() {
        var imageLinks = [];

        const imageLinksUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/ImageLinks/0';
        
        axios({
            method: 'get',
            url: imageLinksUrl,
            headers: {
                "Authorization": "09627a2d93144d10828042019f504b06"
            }
        })
            .then(function (response) {
                
                var str1 = response.data.replace("]", "")
                var str2 = str1.replace("[", "")
                var array = str2.split(",")

                var i;

                for (i = 0; i < array.length; i++) {
                    if (array[i].substring(1, array[i].length - 1).includes("https")) {
                        var element = array[i].substring(1, array[i].length) + "," + array[i+1].substring(0, array[i + 1].length - 1);
                        imageLinks.push(element)
                    }
                }
            }
            )
            .catch(function (error) {
                console.log(error);

            });

        this.setState({ imageUrls: imageLinks })

    }



    moveUp() {
        var current_i = 0;              // current_i is used to handle double click (to not act like a hold)
        
        //setTimeout(
          //  (function (index) {
            //    return function () {
              //      if (this.state.imgTop > 0) {
                        this.setState({ imgTop: this.state.imgTop - 10 })
                //    }
                //}}.bind(this), 200));
           
        }
    

    moveDown() {
        var current_i = 0;              // current_i is used to handle double click (to not act like a hold)

        const node = this.componentRef.current;

        //setTimeout(
          //  (function (index) {
            //    return function () {
                   // if (this.imgTop < node.offsetHeight) {
                    console.log("imgLeft=" + this.state.imgLeft + "imgTop=" + this.state.imgTop)
                        this.setState({ imgTop: this.state.imgTop + 10 })
                   // }
              //  }
            //}.bind(this), 200));

    }

    moveLeft() {
        var current_i = 0;              // current_i is used to handle double click (to not act like a hold)
        
       // setTimeout(
         //   (function (index) {
           //     return function () {
                    if (this.state.imgTop > 0) {
                        this.setState({ imgLeft: this.state.imgLeft - 10 })
                    }
             //   }
            //}.bind(this), 200));

    }

    moveRight() {
        var current_i = 0;              // current_i is used to handle double click (to not act like a hold)

        const node = this.componentRef.current;

        var component = this

       //setTimeout(
         //   (function (index) {
           //     return function () {
                 //   if (this.imgTop > node.offsetWidth) {
                        this.setState({ imgTop: this.state.imgLeft + 10 })
                   // }
              //  }
            //}.bind(this), 200));


    }


    zoomIn() {
        if (this.state.zoomState > 0) {
            this.setState({ zoomState: this.state.zoomState - 1 })
        }
    }

    zoomOut() {
        if (this.state.zoomState < 2) {
            this.setState({ zoomState: this.state.zoomState + 1 })
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


        var images = [];

        var i;
        
        var imgLeft = this.state.imgLeft + "px";
        var imgTop = this.state.imgTop + "px";

        
        //Push images to image[] array, if the index of the image is not the same as the imageSource, it is invisible
        for (i = 0; i < this.state.imageUrls.length; i++) {
            
            if (this.props.imageSource-1 != i) {

                var a = <img className={zoomState} src={this.state.imageUrls[i]} style={{ display: 'none', }} />
            }
            else {
                var a = <img ref={this.componentRef} className={zoomState} src={this.state.imageUrls[i]} style={{
                    transform: 'translateX(' + imgLeft + ')',
                    transform: 'translateY(' + imgTop + ')'
                }}/>
            }
            images.push(a)
        }

        

        return (

            <ul>
                <div>
                <div>
                <button class="img-zoom-btn" disabled={zoomInDisabled} onClick={this.zoomIn.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                    <button class="img-zoom-btn" disabled={zoomOutDisabled} onClick={this.zoomOut.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                </div>
                    <div>
                        <button class="img-move-right" onClick={this.moveRight.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                        <button class="img-move-left" onClick={this.moveLeft.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                        <button class="img-move-up" onClick={this.moveUp.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                        <button class="img-move-down" onClick={this.moveDown.bind(this)}><img class="button-img" src={arrowRight}></img></button>
                    </div>
                    </div>
                <div  class="article-image-pane">
                        {images[0]}
                        {images[1]}
                        {images[2]}
                        {images[3]}
                        {images[4]}
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