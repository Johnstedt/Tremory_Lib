const main = (state = {alternative: 'home', scope: "all", type: 'map',map_draggable: {bool: false}, lastValues: []}, action) => {
    switch (action.type) {
        case "MAIN_SET_ALTERNATIVE":
            state = {
                ...state,
                alternative: action.payload,
                type: 'map',
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "MAIN_SET_TYPE":
            state = {
                ...state,
                type: action.payload,
            }
            break;   
        case "MAP_SET_DRAGGABLE":
            state = {
                ...state,
                map_draggable: action.payload
            }
            break;
    }
    return state;
}

export default main;