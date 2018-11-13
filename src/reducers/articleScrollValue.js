//Represents how far down the article you are scrolled

const articleScrollValue = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SCROLL_VALUE':
            return action.value
        default:
            return state
    }
}

export default articleScrollValue