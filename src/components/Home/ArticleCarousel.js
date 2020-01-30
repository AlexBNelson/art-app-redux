import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css';
import '../../bootstrap.css'
import './Carousel.css'
import { connect } from 'react-redux'
import ArticleThumbnailContainer from './ArticleThumbnailContainer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class ArticleCarousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
    }


    render() {
        const responsive = {
            desktop: {
              breakpoint: { max: 6000, min: 1024 },
              items: 4,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };

        return (
            <Carousel responsive={responsive} itemClass="slider-image-item" containerClass="carousel-container-with-scrollbar">
                <div><ArticleThumbnailContainer id="Pieter609b400b-fdd6-4e5a-bc48-8d92c1bb0bdb"/></div>
                <div><ArticleThumbnailContainer id="Caillebotte49ce37ab-95e4-4873-bd00-d2fd88c6e36c"/></div>
                <div><ArticleThumbnailContainer id="Goya6089bfaa-63f6-47f8-97dd-f361e45b7ac1"/></div>
                <div><ArticleThumbnailContainer id="Muralismof2fecee1-3036-4a47-978e-f7b34c93b885"/></div>
                <div><ArticleThumbnailContainer id="Persian2859d1fc-ed35-4c11-abb5-444c8d491c1b"/></div>
                <div><ArticleThumbnailContainer id="Whistler07f2fc85-e9e2-4d08-b570-a43a104d93a7"/></div>
                <div><ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259"/></div>
            </Carousel>
        )
    }
}

export default ArticleCarousel;