import { getServerURL } from "../Config";

export async function getMapPoints(id) {
    let url = await getServerURL()+'/server/points/Point.php?q=getMapPoints&id=' + id;
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}