import { getOtherUserById } from 'tremorylibrary/lib/UserFetch'
import { getFriends } from 'tremorylibrary/lib/FriendFetch'

export function setUser(id){
    return {
        type: "PROFILE_SET_USER",
        payload: new Promise((resolve, reject) => {
            getOtherUserById(id).then(results => {
                resolve(results[0])
            })
       }) 
    }
}

export function getCurrentFriends(id){
    return {
        type: "SET_CURRENT_FRIENDS",
        payload: new Promise((resolve, reject) => {
            getFriends(id).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function setFriendsByUser(id){
    return {
        type: "PROFILE_SET_FRIENDS",
        payload: new Promise((resolve, reject) => {
            getFriends(id).then(results => {
                resolve(results)
            })
       }) 
    }
}