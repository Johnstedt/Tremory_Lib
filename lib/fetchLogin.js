import { getServerURL } from '../Config'

export async function checkLogin() {
    let url = await getServerURL()+'/server/Login.php?q=checkLogin'
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function logout() {
    let url = await getServerURL()+'/server/Login.php?q=logout'
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function login(email, password) {

  return await fetch(getServerURL()+'/server/Login.php', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      submit: 'login',
      userEmail: email,
      userPassword: password,
    })
  }).then((response) => response.json())
    .then((responseJson) => { return responseJson; })
    .catch((error) => { console.error(error); });
}