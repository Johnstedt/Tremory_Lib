import { fetchExploreAll, fetchExploreUser, fetchExploreAlbum } from 'tremorylibrary/lib/ExploreFetch'

let explore_all_segment = -1
let explore_user_segment = -1
let explore_album_segment = -1

export function getExploreAll(){

    explore_all_segment++

    return {
        type: "SET_EXPLORE_ALL",
        payload: new Promise((resolve, reject) => {
            fetchExploreAll(explore_all_segment).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function getExploreUser(){

    explore_user_segment++

    return {
        type: "SET_EXPLORE_USER",
        payload: new Promise((resolve, reject) => {
            fetchExploreUser(explore_user_segment).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function getExploreAlbum(){

    explore_album_segment++

    return {
        type: "SET_EXPLORE_ALBUM",
        payload: new Promise((resolve, reject) => {
            fetchExploreAlbum(explore_album_segment).then(results => {
                resolve(results)
            })
       }) 
    }
}