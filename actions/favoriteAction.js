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