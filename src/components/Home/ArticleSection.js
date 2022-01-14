import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css';
import '../../bootstrap.css'
import './Carousel.css'
import { connect } from 'react-redux'
import ArticleThumbnailContainer from './ArticleThumbnailContainer'
import FeaturedArticleContainer from './FeaturedArticleContainer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import moreStories from '../../moreStories.svg'; 


class ArticleSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    

  handleScroll() {
      window.scrollTo({left: 0,top:800, behavior: 'smooth'});

    }

    // top:document.body.scrollHeight


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
          <div class="section-container">
            {/* <section responsive={responsive} class="slider-image-item" > */}
                <ArticleThumbnailContainer id="Pieter609b400b-fdd6-4e5a-bc48-8d92c1bb0bdb"/>
                <FeaturedArticleContainer id="Caillebotte49ce37ab-95e4-4873-bd00-d2fd88c6e36c"/>
                <ArticleThumbnailContainer id="Goya6089bfaa-63f6-47f8-97dd-f361e45b7ac1"/>
                <ArticleThumbnailContainer id="Muralismof2fecee1-3036-4a47-978e-f7b34c93b885"/>
                {/* <ArticleThumbnailContainer id="Persian2859d1fc-ed35-4c11-abb5-444c8d491c1b"/>
                <ArticleThumbnailContainer id="Whistler07f2fc85-e9e2-4d08-b570-a43a104d93a7"/>
                <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259"/>
                <ArticleThumbnailContainer id="Suffolk5efa11d3-17cc-4b45-9d4b-2a25fb3dfa6c"/> */}
                <a onClick={this.handleScroll} class="more-stories-container">
                <img onClick={this.handleScroll} class="more-stories" src={moreStories}/>
                <span onClick={this.handleScroll} class="more-stories-text">More Stories</span>
                </a>
            {/* </section>
            
            <section class="second-page"> */}

            <div class="secondary-section">
            <ArticleThumbnailContainer id="Persian2859d1fc-ed35-4c11-abb5-444c8d491c1b"/>
            <ArticleThumbnailContainer id="Suffolk5efa11d3-17cc-4b45-9d4b-2a25fb3dfa6c"/>
                <ArticleThumbnailContainer id="Whistler07f2fc85-e9e2-4d08-b570-a43a104d93a7"/>
                <ArticleThumbnailContainer id="Exekiasa11e87fa-3b16-44de-9354-446c771bc259"/>
                </div>
                <div class="secondary-section">
                <ArticleThumbnailContainer id="EarlyRenaissancef89f01df-da5a-4b5d-acbf-51c561b084db"/>
            <ArticleThumbnailContainer id="Kollwitz0c9e7e0c-b62d-4c3f-83ff-bf044f674121"/>
                <ArticleThumbnailContainer id="Fayum17a7b69e-212e-421f-ac17-894b68ca9527"/>
                <ArticleThumbnailContainer id="Sargent34da7c7e-54ba-4e56-83ec-e9635c531e50"/>
                </div>
                <div class="secondary-section">
                <ArticleThumbnailContainer id="Poster8cefd719-76ab-4461-ae08-05d4e3723dec"/>
                </div>
            {/* </section> */}
            </div>
            
                

          
        )
    }
}

export default ArticleSection;