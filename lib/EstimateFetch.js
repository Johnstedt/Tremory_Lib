import { getServerURL } from '../Config'

export async function EstimateCoordinates(album_id, user_id) {
    let url = await getServerURL()+'/server/EstimateCoordinates.php?q=estimate&album_id='+album_id+'&user_id='+user_id
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}