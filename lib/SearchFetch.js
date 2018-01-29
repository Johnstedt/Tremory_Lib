import { addToStore, getFromStore } from './Store'
import { getServerURL } from '../Config'

/**
 * @param {*} searchData 
 * @param {*} type | all, users, albums or points as string
 * @param {*} segment Optional, get three first without it.
 */
export async function search(searchData, type, segment) {
    let url = ''

    if(type == "all"){
        url = await getServerURL()+'/server/search.php?searchdata='+ searchData
    } else if(segment == undefined){
        url = await getServerURL()+'/server/search.php?q=' + type + '&searchdata='+ searchData
    } else {
        url = await getServerURL()+'/server/search.php?q=' + type 
        + '&searchdata=' + searchData
        + '&segment=' + segment
    }

    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson }) .catch((error) => { console.error(error) })
}