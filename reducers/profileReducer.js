const profile = (state = {alternative: 'images', lastValues: []}, action) => {
    switch (action.type) {
        case "PROFILE_SET_ALTERNATIVE":
            state = {
                ...state,
                alternative: action.payload,
            }
            break;
        case "PROFILE_SET_USER":
            state = {
                ...state,
                user: action.payload,
            }
            break;
        case "PROFILE_SET_FRIENDS_FULFILLED":
            state = {
                ...state,
                friends: action.payload,
            }
            break;        
        case "PROFILE_SET_USER_FULFILLED":
            state = {
                ...state,
                user: action.payload,
                alternative: "images"
            }
            break;    
    }
    return state;
}

export default profile;