import { getServerURL } from '../Config'

export async function sendEmail(email) {
 
    let url = await getServerURL()+'/server/PasswordRestoration.php?q=sendRestorePasswordEmail';

    let data = JSON.stringify({
      'email': email,
    })
  
    const body = new FormData()
    body.append('data', data);
  
    return await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body
    }).then((response) => response.json()) 
      .then((responseJson) => { return responseJson })
      .catch((error) => { console.error('TREMORY_LIB: sendEmailError: ', error) })
}

export async function changePassword(password, confirmPassword, token) {
 
    let url = await getServerURL()+'/server/PasswordRestoration.php?q=changePassword';

    let data = JSON.stringify({
      'password': password,
      'confirmPassword': confirmPassword,
      'token': token
    })
  
    const body = new FormData()
    body.append('data', data);
  
    return await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body
    }).then((response) => response.json()) 
      .then((responseJson) => { return responseJson })
      .catch((error) => { console.error('TREMORY_LIB: changePasswordError: ', error) })
}