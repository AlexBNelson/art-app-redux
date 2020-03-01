import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import axios from 'axios'
import '../../../../Article.css';
import '../../../../bootstrap.css'
import indicatorFilled from '../../../../indicator-filled.svg';
import indicatorEmpty from '../../../../indicator-empty.svg';
import { connect } from 'react-redux'
import { setImageSource } from '../../../../actions'



class PageIndicator extends Component {

    constructor(props) {
        super(props)
    }
   

    render() {
        
        var sections = []

        const { dispatch } = this.props;

        var i
        
        var self = this;

        for(i=1; i <= this.props.total; i++){
            if(i == this.props.page){
                if(i == 1){
                    sections.push(<span class="page-indicator-filled-word" onClick={() => {dispatch(setImageSource(0))}}>intro</span>)
                }
                else if(i == this.props.total){
                    sections.push(<span class="page-indicator-filled-word" onClick={() => {dispatch(setImageSource(self.props.total-1))}}>appendix</span>)
                }
                else if (i==2){
                    sections.push(<span class="page-indicator-filled" onClick={() => { dispatch(setImageSource(1))}}>{i.toString()}</span>)
                }
                else if (i==3){
                    sections.push(<span class="page-indicator-filled" onClick={() => { dispatch(setImageSource(2))}}>{i.toString()}</span>)
                }
                else if (i==4){
                    sections.push(<span class="page-indicator-filled" onClick={() => { dispatch(setImageSource(3))}}>{i.toString()}</span>)
                }
                else if (i==5){
                    sections.push(<span class="page-indicator-filled" onClick={() => { dispatch(setImageSource(4))}}>{i.toString()}</span>)
                }
                else if (i==6){
                    sections.push(<span class="page-indicator-filled" onClick={() => { dispatch(setImageSource(5))}}>{i.toString()}</span>)
                }

            }
            else{
                if(i == 1){
                    sections.push(<span class="page-indicator-empty" onClick={() => { dispatch(setImageSource(0))}}>intro</span>)
                }
                else if(i == this.props.total){
                    sections.push(<span class="page-indicator-empty" onClick={() => {dispatch(setImageSource(self.props.total-1))}}>appendix</span>)
                }
                else if (i==2){
                    sections.push(<span class="page-indicator-empty" onClick={() => { dispatch(setImageSource(1))}}>{i.toString()}</span>)
                }
                else if (i==3){
                    sections.push(<span class="page-indicator-empty" onClick={() => { dispatch(setImageSource(2))}}>{i.toString()}</span>)
                }
                else if (i==4){
                    sections.push(<span class="page-indicator-empty" onClick={() => { dispatch(setImageSource(3))}}>{i.toString()}</span>)
                }
                else if (i==5){
                    sections.push(<span class="page-indicator-empty" onClick={() => { dispatch(setImageSource(4))}}>{i.toString()}</span>)
                }
                else if (i==6){
                    sections.push(<span class="page-indicator-empty" onClick={() => { dispatch(setImageSource(5))}}>{i.toString()}</span>)
                }
            }
        }

        var indicatorClass

        var self= this;
        var indicator = '';
        if(this.props.page == 1){
            indicatorClass = "mobile-indicator-container-intro"
            indicator = ''
        }else{
            indicatorClass = "mobile-indicator-container"
            indicator = self.props.page + "/" + self.props.total
        }

        return (
            <div class={indicatorClass}>
                {sections}     
            </div> 
        )
    }
}

export default connect() (PageIndicator);