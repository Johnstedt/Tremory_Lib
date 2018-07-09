const album = (
    state = {
        albums: [],
        users: [],
        img_chosen: [],
        alternative: "images",
    }, action) => {

    switch (action.type) {
        case "SET_ALBUMS_BY_USER":
            state = {
                ...state,
                albums: action.payload,
            }
            break;
        case "SET_ALBUMS_BY_USER_FULFILLED":
            state = {
                ...state,
                albums: action.payload,
            }
            break;
        case "SET_ALBUM":
            state = {
                ...state,
                album: action.payload,
                alternative: 'images'
            }
            break;
        case "SET_ALBUM_USERS_FULFILLED":
            state = {
                ...state,
                users: action.payload,
            }
            break;
        case "SET_ALBUM_ALTERNATIVE":
            state = {
                ...state,
                alternative: action.payload,
            }
            break;
        case "SET_CHOSEN_IMAGES":
            state = {
                ...state,
                img_chosen: action.payload,
            }
            break;
    }
    return state;
}

export default album;