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

        var infoUrl = 'https://dyptychfa2.azurewebsites.net/api/' + this.props.id + '/ArticleInfo/0'

        axios({
            method: 'get',
            url: infoUrl
        })
            .then(response => this.setState({ info: response.data.split("\",\"") })
            )
            .catch(function (error) {
                window.alert(error);

            });
    }


    render() {

        var displayedInfo

        var htmlArray

        //the reason for this inital if statement is because of the strange behaviour of the image display logic
        if (this.props.viewState == false && this.props.imageSource == 0) {
            displayedInfo = this.state.info[this.state.info.length - 1]
        }
        else {
            displayedInfo = this.state.info[this.props.imageSource]

        }

        if (displayedInfo != null) {
            var displayedInfo2 = displayedInfo.replace("\\\\r\\\\n", "|");

            var formattedArray = displayedInfo2.split('|');
            var i = 0;
            htmlArray = [];


            for (i = 0; i < formattedArray.length; i++) {
                htmlArray.push(<p>{formattedArray[i]}</p>)
            }
        }

        return (

           
            <div class="info-pane">
                htmlArray
                </div>
        );
    }
}

export default InfoPane;