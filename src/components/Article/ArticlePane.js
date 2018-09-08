import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../bootstrap.css';
import '../../Article.css'
import ImagePane from './ArticlePane/ImagePane';
import TextPane from './ArticlePane/TextPane';
import TextPaneDetails from '../../containers/TextPaneDetails';
import TodoListDetails from '../../containers/ImagePaneDetails';
import VisibleTodoList from '../../containers/VisibleTodoList';


class ArticlePane extends Component {

    render() {
        return (
           
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <VisibleTodoList />
                    </div>
                    <div class="col-6">
                        <TextPane/>
                    </div>

                </div>
                </div>

        );
    }
}

export default ArticlePane;