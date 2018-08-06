import { getServerURL } from '../Config'

export async function addImageTimes(times) {
    let url = await getServerURL()+'/server/ImageTimeExist.php?q=addImageTimes'
  
    let data = JSON.stringify({
      'times': times,
    })
  
    const body = new FormData()
    body.append('data', data);
  
    return await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body
    }).then((response) => response.json()) 
      .then((responseJson) => { return responseJson })
      .catch((error) => { console.error('addImageTimeError: ', error) })
}

export async function doesTimesExist(times) {
    let url = await getServerURL()+'/server/ImageTimeExist.php?q=doesTimesExist'
  
    let data = JSON.stringify({
      'times': times,
    })
  
    const body = new FormData()
    body.append('data', data);
  
    return await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body
    }).then((response) => response.json()) 
      .then((responseJson) => { return responseJson })
      .catch((error) => { console.error('addImageTimeError: ', error) })
}