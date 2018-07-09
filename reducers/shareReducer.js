const share = (state = {receiver_list: [], lastValues: []}, action) => {
    switch (action.type) {
        case "SET_RECEIVER_LIST_FULFILLED":
            state = {
                ...state,
                receiver_list: action.payload,
            }
            break;
    }
    return state;
}

export default share;