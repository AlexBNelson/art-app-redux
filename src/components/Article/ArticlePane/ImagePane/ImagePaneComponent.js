import React from 'react'
import PropTypes from 'prop-types'
import ImageDetailsPane from './ImageDetailsPane';
import '../../../../Article.css'

const ImagePaneComponent = ({ viewState, imageSource }) => (
    <ul>
        <div class="article-image-pane">
            <div class="image-details-pane  navbar-light bg-light">
               <ImageDetailsPane/>
            </div>
            <div className={viewState ? 'visible' : 'hidden'}>
                <img class="article-image-pane-img" src={imageSource} />
                </div>
        </div>
    </ul>
    
)

ImagePaneComponent.propTypes = {
    viewState: PropTypes.bool.isRequired,
    imageSource: PropTypes.string.isRequired
}

export default ImagePaneComponent