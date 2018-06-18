import { getServerURL } from '../Config'

export async function rotateImage(orientation, image_id) {
  let url = await getServerURL() + '/server/points/Point.php?q=saveOrientation&orientation='+orientation+'&id='+image_id

  return await fetch(url, { credentials: 'include' }).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error) })
}

export async function getFavorites(image_id) {
    let url = await getServerURL() + '/server/points/Point.php?q=getFavorites&id='+image_id
  
    return await fetch(url, { credentials: 'include' }).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error) })
  }

  export async function addView(image_id) {
    let url = await getServerURL() + '/server/points/Point.php?q=addView&id='+image_id
  
    return await fetch(url, { credentials: 'include' }).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error) })
  }

  export async function addDownload(image_id) {
    let url = await getServerURL() + '/server/points/Point.php?q=addDownload&id='+image_id
  
    return await fetch(url, { credentials: 'include' }).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error) })
  }

  export async function addToFavorite(image_id) {
    let url = await getServerURL() + '/server/points/Point.php?q=addToFavorite&id='+image_id
  
    return await fetch(url, { credentials: 'include' }).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error) })
  }

  export async function removeFromFavorite(image_id) {
    let url = await getServerURL() + '/server/points/Point.php?q=removeFromFavorite&id='+image_id
  
    return await fetch(url, { credentials: 'include' }).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error) })
  }