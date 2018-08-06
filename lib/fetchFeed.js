import { getServerURL } from '../Config'

export async function fetchFeed(segment) {
    let url = await getServerURL()+'/server/Feed.php?q=test&segment='+segment
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function fetchMapBox(west, east, north, south) {
    let url = await getServerURL()+'/server/points/Point.php?q=place&west='+west+'&east='+east+'&north='+north+'&south='+south
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function fetchZoomBox(west, east, north, south) {
    let url = await getServerURL()+'/server/points/Point.php?q=zoom&west='+west+'&east='+east+'&north='+north+'&south='+south
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}