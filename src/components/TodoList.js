import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import ImageDetailsPane from './Article/ArticlePane/ImagePane/ImageDetailsPane';
import '../Article.css'

const TodoList = ({ todos, viewState, toggleTodo }) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        )}
        <div class="article-image-pane">
            <div class="image-details-pane  navbar-light bg-light">
               <ImageDetailsPane/>
            </div>

        <img className={viewState ? 'hidden' : 'visible'} class="article-image-pane-img" src="http://localhost:58282/featuredArticle1" />
        </div>
    </ul>
    
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    viewState: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList