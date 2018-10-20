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
        return (
            <div class="info-pane">
                {this.state.info[this.props.imageSource-1]}
                </div>
        );
    }
}

export default InfoPane;