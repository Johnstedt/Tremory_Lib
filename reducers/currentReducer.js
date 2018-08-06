const current = (
    state = {
        user: null,
        friends: [],
            }, action) => {

    switch (action.type) {
        case "SET_CURRENT_USER":
            state = {
                ...state,
                user: action.payload,
            }
            break
        case "SET_ALBUMS_BY_CURRENT_USER_FULFILLED":
            state = {
                ...state,
                albums: action.payload
            }    
            break
        case "ADD_USER_ALBUM":
            state = {
                ...state,
                albums: [...state.albums, action.payload]
            }
            break
        case "SET_CURRENT_FRIENDS_FULFILLED":
            state = {
                ...state,
                friends: action.payload
            }
            break
        case "SET_CURRENT_FAVORITES_FULFILLED":
            state = {
                ...state,
                favorites: action.payload
            }
            break
        case "ADD_FAVORITE":
            let fav = action.payload
            fav.id = action.payload.point_id
            state = {
                ...state,
                favorites: [...state.favorites, fav]
            }
            break
        case "REMOVE_FAVORITE":
            state = {
                ...state,
                favorites: state.favorites.filter((favorite) => favorite.id != action.payload.point_id )
            }
            break
    }
    return state;
}

export default current;