import { getPointsFromUserById } from 'tremorylibrary/lib/PointFetch'
import { fetchMapBox, fetchZoomBox } from 'tremorylibrary/lib/fetchFeed'
import { formatPoints } from '../utils/formatPoints'

export function setPointsByCurrentUser(id){
    return {
        type: "SET_CURRENT_POINTS_BY_USER",
        payload: new Promise((resolve, reject) => {
            getPointsFromUserById(id).then(results => {
                resolve(formatPoints(results, 0))
            })
       }) 
    }
}

export function setPointsByUser(id){
    return {
        type: "SET_POINTS_BY_USER",
        payload: new Promise((resolve, reject) => {
            getPointsFromUserById(id).then(results => {
                resolve(formatPoints(results, 0))
            })
       }) 
    }
}

export function setPointsByArea(west, east, north, south){
    return {
        type: "SET_POINTS_BY_USER",
        payload: new Promise((resolve, reject) => {
            fetchMapBox(west, east, north, south).then(results => {
                resolve(formatPoints(results, 0))
            })
       }) 
    }
}

export function setPointsByZoom(west, east, north, south){
    return {
        type: "APPEND_POINTS",
        payload: new Promise((resolve, reject) => {
            fetchZoomBox(west, east, north, south).then(results => {
                resolve(results)
            })
       }) 
    }
}