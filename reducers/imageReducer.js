import { formatPoints } from '../utils/formatPoints'

const image = (
    state = {
        imageview_visible: false, 
        points: [],
        pointer: null,
        point_visible: [],
        point_selected: [],
        point_list: [],
        longitude: 0,
        latitude: 0,
        coordinates: null,
        edit_image_coordinates_state: false,
        lastValues: []}, action) => {
    /*
    POINTS : All in session
    VISIBLE : Visible on map
    LIST : To display in left list
    SELECTED : To do things with
    */        

    switch (action.type) {
        case "SET_IMAGEVIEW_VISIBILITY":
            state = {
                ...state,
                imageview_visible: action.payload,
            }
            break;
        case "SET_POINT_VISIBILITY":
            state = {
                ...state,
                point_visible: action.payload,
            }
            break;
        case "SET_POINT_SELECTED":
            state = {
                ...state,
                point_selected: action.payload,
            }
            break;
        case "SET_BOX_COORDINATES":
            state = {
                ...state,
                coordinates: action.payload,
                point_list: state.point_visible.filter((point) => point.latitude < action.payload.north && point.latitude > action.payload.south && point.longitude > action.payload.west && point.longitude < action.payload.east)
            }
            break;
        case "SET_POINT_LIST":
            state = {
                ...state,
                point_list: action.payload,
            }
            break;    
        case "SET_IMAGE_POINTER":
            state = {
                ...state,
                imageview_visible: (!(state.pointer == action.payload && state.imageview_visible)) || state.pointer == null ,
                pointer: action.payload,
            }
            break;
        case "SET_PRE_CHOICE":
            state = {
                ...state,
                prePointer: action.payload,
            }
            break;
        case "SET_POINTS_BY_USER_FULFILLED":
            state = {
                ...state,
                points: action.payload,
                point_visible: action.payload,
                point_list: action.payload, 
                point_selected: [],
                pointer: 0,
            }
            break;
        case "APPEND_POINTS_FULFILLED":

            let p = formatPoints(action.payload, state.points.length)
            
            state = {
                ...state,
                points: [...state.points, ...p],
                point_visible: [...state.point_visible, ...p],
            }
            break;
        case "SET_POINTS_MANUALLY":
            state = {
                ...state,
                points: action.payload,
                pointer: 0,
            }
            break;
        case "SET_ALBUM_POINTS_FULFILLED":
            state = {
                ...state,
                points: action.payload,
                point_visible: action.payload,
                point_list: action.payload,
                point_selected: [],
                pointer: 0,
            }
            break;
        case "ADD_FAVORITE":
            state = {
                ...state,
                points: state.points.filter((p) => p.point_id != action.payload.point_id ? p : (p.favorites = parseInt(p.favorites) + 1) ),
                imageview_visible: true,
            }
            break;
        case "REMOVE_FAVORITE":
            state = {
                ...state,
                points: state.points.filter((p) => p.point_id != action.payload.point_id ? p : (p.favorites = parseInt(p.favorites) - 1) ) ,
                imageview_visible: true,
            }
            break;    
    }
    return state;
}

export default image;