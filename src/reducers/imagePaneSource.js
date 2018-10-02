const imagePaneSource = (state = '', action) => {
    switch (action.type) {
        case 'SET_IMAGE_SOURCE':
            return action.source
        default:
            return state
    }
}

export default imagePaneSource