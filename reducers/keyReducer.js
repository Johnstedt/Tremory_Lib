const key = (
    state = {
        shift: false, 
            } , action) => {

    switch (action.type) {
        case "SET_SHIFT_STATE":
            state = {
                ...state,
                shift: action.payload,
            }
            break;
    }
    return state;
}

export default key;