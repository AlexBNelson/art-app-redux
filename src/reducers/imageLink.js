const imageLink = (state = "", action) => {
    switch (action.type) {
        case 'SET_IMAGE_LINK':
            return action.imgLink
        default:
            return state
    }
}

export default imageLink;