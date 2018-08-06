import { getNotifications, getUnseenNotificationsAmount } from 'tremorylibrary/lib/NotificationFetch'

export function setNotification(id){
    return {
        type: "SET_NOTIFICATIONS",
        payload: new Promise((resolve, reject) => {
            getNotifications(id).then(results => {
                resolve(results)
            })
       }) 
    }
}

export function setUnseenNotificationsAmount(id){
    return {
        type: "SET_UNSEEN_NOTIFICATION_AMOUNT",
        payload: new Promise((resolve, reject) => {
            getUnseenNotificationsAmount(id).then(results => {
                resolve(results.unseen_notifications)
            })
       }) 
    }
}