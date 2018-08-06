import { getFavorites } from 'tremorylibrary/lib/ImageStats'

export function getCurrentFavorites(id){
    return {
        type: "SET_CURRENT_FAVORITES",
        payload: new Promise((resolve, reject) => {
            getFavorites(id).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function addFavorite (item) {
    return async (dispatch) => {
        dispatch({type: "ADD_FAVORITE", payload: item,});
    }
}

export function removeFavorite (item) {
    return async (dispatch) => {
        dispatch({type: "REMOVE_FAVORITE", payload: item,});
    }
}