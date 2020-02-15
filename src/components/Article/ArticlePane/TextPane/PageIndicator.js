import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../../../Article.css';
import '../../../../bootstrap.css'
import indicatorFilled from '../../../../indicator-filled.svg';
import indicatorEmpty from '../../../../indicator-empty.svg';



class PageIndicator extends Component {

    constructor(props) {
        super(props)
    }

   

    render() {
        
        var sections = []

        var i

        for(i=1; i <= this.props.total; i++){
            if(i == this.props.page){
                if(i == 1){
                    sections.push(<span class="page-indicator-filled-word">intro</span>)
                }else if(i == this.props.total){
                    sections.push(<span class="page-indicator-filled-word">appendix</span>)
                }else{
                    sections.push(<span class="page-indicator-filled">{i.toString()}</span>)
                }
            }
            else{
                if(i == 1){
                    sections.push(<span class="page-indicator-empty">intro</span>)
                }else if(i == this.props.total){
                    sections.push(<span class="page-indicator-empty">appendix</span>)
                }else{
                    sections.push(<span class="page-indicator-empty">{i.toString()}</span>)
                }
            }
        }

        var indicatorClass

        var self= this;
        var indicator = '';
        if(this.props.page == 1){
            indicatorClass = "indicator-container-intro"
            indicator = ''
        }else{
            indicatorClass = "indicator-container"
            indicator = self.props.page + "/" + self.props.total
        }

        return (
            <div class={indicatorClass}>
                {sections}     
            </div> 
        )
    }
}

export default PageIndicator;