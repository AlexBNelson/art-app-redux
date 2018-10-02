import { Location, Locations } from 'react-router-component';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import '../../../bootstrap.css';
import '../../../Article.css';
import {articles} from '../../../ArticleText.js';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter, setImageSource } from '../../../actions'
import { VisibilityFilters } from '../../../actions'
import axios from 'axios'



class TextPane extends Component {

    start = Date.now();
    current = Date.now();

    constructor(props) {
        super(props)
        this.state = {
            intro: '',
            scrollPoints: []
        };
    }


    componentDidMount() {
        const { hideImage, dispatch } = this.props;
        const scrollNode = this.myScroll;
        
        const scrollPointUrl = 'http://localhost:58282/articleContent/' + this.props.id + '/ImagePositions';
        
        var scrollPoints = [];
        
        axios({
            method: 'get',
            url: scrollPointUrl
        })
            .then(function (response) {
                var i;

                for (i = 0; i < response.data.length; i++) {
                    scrollPoints.push(response.data[i])
                }
                console.log(scrollPoints.toString())
            }
            )
            .catch(function (error) {
                window.alert(error);

            });

        var imageLinks = [];

        const imageLinksUrl = 'http://localhost:58282/articleContent/' + this.props.id + '/ImageLinks';

        axios({
            method: 'get',
            url: imageLinksUrl
        })
            .then(function (response) {
                var i;

                for (i = 0; i < response.data.length; i++) {
                    imageLinks.push(response.data[i])
                }
            }
            )
            .catch(function (error) {
                window.alert(error);

            });
        

        scrollNode.addEventListener('scroll', function () {
            //var i;
            //for (i = 0; i < scrollPoints.length; i++) {
            //    if (i == 0) {
            //        if (scrollNode.scrollTop <= scrollPoints[0]) {
            //            dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
            //        }
            //    }
            //    else {
            //        if (scrollNode.scrollTop > scrollPoints[i - 1] && scrollNode.scrollTop <= scrollPoints[i]) {

            //        }
            //    }
            //}
            if (scrollNode.scrollTop <= 300) {
                dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
            }
            else if (scrollNode.scrollTop > 300) {
                dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
                dispatch(setImageSource("http://localhost:58282/featuredArticle2"))
            }
        })

        const introUrl = 'http://localhost:58282/articleContent/' + this.props.id + '/Chapters/0';
        

        axios({
            method: 'get',
            url: introUrl
        })
            .then(response => this.setState({ intro: response.data })
            )
            .catch(function (error) {
                window.alert(error);
                
            });

        
       
    }
    

    handleScroll() {
        console.log(this);
    }

    render() {
        const introText = this.state.intro ;
        return (
            <div id="TextPane.scrollDiv" class="container article-text-pane" ref={ref => this.myScroll = ref} >
                <div class="article-intro-pane">
                    {articles.data[0].Text}
                    {introText}
                    </div>
                <div class=" article-body-pane">
                    {this.chapters}
                [32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
        [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum 
        
         [32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
        [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum 
        
                         [32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non-numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
        [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                </div>
                </div>

        );
    }
}

TextPane.propTypes = {
    hideImage: PropTypes.func.isRequired
}

export default connect()(TextPane)