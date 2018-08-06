import { getTheme } from '../utils/getTheme'
import getStyles from '../map/map_style/getStyles'

const settings = (state = {theme: getTheme('darcula'), menu: "text", theme_name: 'darcula', map_style: "satellite", map_name: "satellite" , lastValues: []}, action) => {
    switch (action.type) {
        case "SET_THEME":
            state = {
                ...state,
                theme: getTheme(action.payload),
                theme_name: action.payload
            }
            break;    
        case "SET_MAP":
            state = {
                ...state,
                map_style: getStyles(action.payload),
                map_name: action.payload
            }
            break;
        case "SET_MENU":
            state = {
                ...state,
                menu: action.payload
            }
            break;
    }
    return state;
}

export default settings;