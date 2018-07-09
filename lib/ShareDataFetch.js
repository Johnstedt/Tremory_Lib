import { getServerURL } from '../Config'

export async function giveData(id) {
    let url = await getServerURL()+'/server/ShareData.php?q=giveData&id='+id
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function takeData(id) {
    let url = await getServerURL()+'/server/ShareData.php?q=takeData&id='+id
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getReceiverList() {
    let url = await getServerURL()+'/server/ShareData.php?q=getReceiverList'
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}