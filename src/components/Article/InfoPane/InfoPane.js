import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import '../../../App.css';
import Bootstrap from 'bootstrap';
import '../../../bootstrap.css';
import '../../../Article.css';
import axios from 'axios';


class InfoPane extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: []
        }
        
    }

    componentDidMount() {

        var infoUrl = 'http://localhost:58282/articleContent/' + this.props.id + '/ArticleInfo' 

        axios({
            method: 'get',
            url: infoUrl
        })
            .then(response => this.setState({ info: response.data })
            )
            .catch(function (error) {
                window.alert(error);

            });
    }
    

    render() {
        var displayedInfo

        //the reason for this inital if statement is because of the strange behaviour of the image display logic
        if (this.props.viewState == false && this.props.imageSource == 0) {
            displayedInfo = this.state.info[this.state.info.length - 1]
        }
        else {
            displayedInfo = this.state.info[this.props.imageSource]
        }
        
        return (

           
            <div class="info-pane">
                {displayedInfo}
                </div>
        );
    }
}

export default InfoPane;