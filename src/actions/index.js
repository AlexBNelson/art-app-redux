
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const setImageSource = source => ({
    type: 'SET_IMAGE_SOURCE',
    source
})

export const setScrollValue = value => ({
    type: 'SET_SCROLL_VALUE',
    value
})

export const setArticleData = data => ({
    type: 'SET_ARTICLE_DATA',
    data
})

export const VisibilityFilters = {
    VISIBLE: 'VISIBLE',
    INVISIBLE: 'INVISIBLE'
}