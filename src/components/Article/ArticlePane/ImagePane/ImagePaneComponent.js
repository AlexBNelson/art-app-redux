import React from 'react'
import PropTypes from 'prop-types'
import '../../../../Article.css'
import { Component } from 'react'
import ImageViewer from './ImageViewer/ImageViewer.js';
import ArticleThumbnailContainer from '../../../Home/ArticleThumbnailContainer'
import instag from '../../../../instag.svg'; 


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

            var relatedSection = <div></div>

            if(this.props.article.appendixPage.relatedArticles){

                for(var i=0; i<this.props.article.appendixPage.relatedArticles.length; i++ ){
                    relatedArticles.push(<ArticleThumbnailContainer id={this.props.article.appendixPage.relatedArticles[i]}/>);
                }
                
                 relatedSection = <div><br/><div><span class="related-text">Related Articles:</span>{relatedArticles}</div></div>
            }


            return(<div class="thank-you-container">
                <ul class="thank-you">
                    <p>Thanks for Reading!</p>
                    <p>If you enjoyed the article, follow us on Instagram<a href="https://www.instagram.com/dyptych_art/?hl=en" target="_blank"><img class="insta-icon-thank" src={instag} href="https://www.instagram.com/dyptych_art/?hl=en"/></a></p>
                    {relatedSection}<br/></ul></div>)
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