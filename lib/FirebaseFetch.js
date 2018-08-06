import { getServerURL } from '../Config'

export async function addFirebaseToken(token) {

    let url = await getServerURL()+'/server/PushNotification.php?q=addToken';
  
    let data = JSON.stringify({
      'token': token,
    })
  
    const body = new FormData()
    body.append('data', data);
  
    return await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body
    }).then((response) => response.json()) 
      .then((responseJson) => { return responseJson })
      .catch((error) => { console.error('addFirebaseToken: ', error) })
  }