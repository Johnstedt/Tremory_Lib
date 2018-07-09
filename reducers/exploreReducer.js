const explore = (state = {explore_all: [], explore_user: [], explore_album: [], lastValues: []}, action) => {
    switch (action.type) {
        case "SET_EXPLORE_ALL_FULFILLED":
            state = {
                ...state,
                explore_all: [...state.explore_all, ...action.payload],
            }
            break;
        case "SET_EXPLORE_USER_FULFILLED":
            state = {
                ...state,
                explore_user: [...state.explore_user, ...action.payload],
            }
            break;    
        case "SET_EXPLORE_ALBUM_FULFILLED":
            state = {
                ...state,
                explore_album: [...state.explore_album, ...action.payload],
            }
            break;
    }
    return state;
}

export default explore;