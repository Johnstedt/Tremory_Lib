import { getReceiverList } from 'tremorylibrary/lib/ShareDataFetch'

export function getShareReceiverList(){

    return {
        type: "SET_RECEIVER_LIST",
        payload: new Promise((resolve, reject) => {
            getReceiverList().then(results => {
                resolve(results)
            })
       }) 
    }
}