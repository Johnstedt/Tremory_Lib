import { getServerURL } from '../Config'

export async function fetchExploreAll(segment) {
    let url = await getServerURL()+'/server/Feed.php?q=all&segment='+segment
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function fetchExploreUser(segment) {
    let url = await getServerURL()+'/server/Feed.php?q=user&segment='+segment
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function fetchExploreAlbum(segment) {
    let url = await getServerURL()+'/server/Feed.php?q=album&segment='+segment
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}