import { getAlbumsFromUser, getAlbumPoints, getAlbumUsers } from 'tremorylibrary/lib/AlbumFetch'
import {formatPoints} from '../utils/formatPoints'

export function setAlbumsByUser(id){
    return {
        type: "SET_ALBUMS_BY_USER",
        payload: new Promise((resolve, reject) => {
            getAlbumsFromUser(id).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function setAlbumsByCurrentUser(id){
    return {
        type: "SET_ALBUMS_BY_CURRENT_USER",
        payload: new Promise((resolve, reject) => {
            getAlbumsFromUser(id).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function setAlbumPoints(id){
    return {
        type: "SET_ALBUM_POINTS",
        payload: new Promise((resolve, reject) => {
            getAlbumPoints(id).then(results => {
                resolve(formatPoints(results, 0))
            })
       }) 
    }
}

export function setAlbumUsers(id){
    return {
        type: "SET_ALBUM_USERS",
        payload: new Promise((resolve, reject) => {
            getAlbumUsers(id).then(results => {
                resolve(results)
            })
       }) 
    }
}