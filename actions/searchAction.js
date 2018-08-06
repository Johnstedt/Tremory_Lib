import { search } from 'tremorylibrary/lib/SearchFetch'

export function searchQuiery(searchData, type, segment){
    return {
        type: "SET_SEARCH_QUIERY",
        payload: new Promise((resolve, reject) => {
            search(searchData, type, segment).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function extendSearchQuiery(searchData, type, segment){
    return {
        type: "EXTEND_SEARCH_QUIERY",
        payload: new Promise((resolve, reject) => {
            search(searchData, type, segment).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function searchUser(searchData, segment){
    return {
        type: "SEARCH_USER_QUIERY",
        payload: new Promise((resolve, reject) => {
            search(searchData, "users", segment).then(results => {
                resolve(results)
            })
       }) 
    }
}
