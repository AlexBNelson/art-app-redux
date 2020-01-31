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
            if(i <= this.props.page){
                sections.push(<img class="page-indicator-filled" src={indicatorFilled}/>)
            }
            else{
                sections.push(<img class="page-indicator-empty" src={indicatorEmpty}/>)
            }
        }

        var indicatorClass

        if(this.props.page == 1){
            indicatorClass = "indicator-container-intro"
        }else{
            indicatorClass = "indicator-container"
        }

        return (
            <div class={indicatorClass}>
                {sections}    
            </div> 
        )
    }
}

export default PageIndicator;