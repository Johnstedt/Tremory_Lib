const edit = (state = {image_data_state: "neither", edit_image_state: '', latitude: 0, longitude: 0, lastValues: []}, action) => {
    switch (action.type) {
        case "EDIT_IMAGE_STATE":
            state = {
                ...state,
                edit_image_state: action.payload,
            }
            break;
        case "EDIT_IMAGE_COORDINATES_LAT":
            state = {
                ...state,
                latitude: action.payload,
            }
            break;    
        case "EDIT_IMAGE_COORDINATES_LNG":
            state = {
                ...state,
                longitude: action.payload,
            }
            break;
        case "IMAGE_DATA_STATE":
            state = {
                ...state,
                image_data_state: action.payload,
            }
            break;    
    }
    return state;
}

export default edit;