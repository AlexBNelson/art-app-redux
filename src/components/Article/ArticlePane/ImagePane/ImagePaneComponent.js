import React from 'react'
import PropTypes from 'prop-types'
import '../../../../Article.css'
import { Component } from 'react'
import ImageViewer from './ImageViewer/ImageViewer.js';
import ArticleThumbnailContainer from '../../../Home/ArticleThumbnailContainer'


class ImagePaneComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        var imageLink;

        var imageCredit;

        var introLabel;

        if (this.props.imageSource == 0) {
            imageLink = this.props.article.introPage.imageUrl
        } else if (this.props.imageSource <= this.props.article.bodyPages.length) {

            imageLink = this.props.article.bodyPages[this.props.imageSource - 1].imageUrl

            if(this.props.imgLink !=""){
                imageLink = this.props.imgLink
            }
    
            imageCredit = this.props.article.bodyPages[this.props.imageSource - 1].imageCredit
        } else {
            imageLink = this.props.article.appendixPage.imageUrl
        }

        var randomKey =  Math.random()

        var isIntro = (this.props.imageSource == 0);

       

        if(this.props.imageSource == this.props.article.bodyPages.length+1){
            var relatedArticles = []

            var relatedSection ={}

            if(this.props.article.appendixPage.relatedArticles){

                for(var i=0; i<this.props.article.appendixPage.relatedArticles.length; i++ ){
                    relatedArticles.push(<ArticleThumbnailContainer id={this.props.article.appendixPage.relatedArticles[i]}/>);
                }
                
                 relatedSection = <div><br/><div>Related Articles:{relatedArticles}</div></div>
            }


            return(<ul class="thank-you">Thanks for Reading!<br/>{relatedSection}</ul>)
        }else{
        return (

            <ul>
                <ImageViewer isIntro={isIntro} key={randomKey} imageCredit={imageCredit} imageLink={imageLink}/>
                
            </ul>

        );}
    }
}



ImagePaneComponent.propTypes = {
    viewState: PropTypes.bool.isRequired,
    imageSource: PropTypes.string.isRequired
}

export default ImagePaneComponent

  // https://stackoverflow.com/questions/40114942/react-button-pressed-keep-calling-function for zooming