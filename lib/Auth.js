import { getServerURL } from '../Config'

export async function login(email, password) {

  return await fetch(getServerURL()+'/server/Login.php', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      submit: 'mobilelogin',
      userEmail: email,
      userPassword: password,
    })
  }).then((response) => response.json())
    .then((responseJson) => { return responseJson; })
    .catch((error) => { console.error(error); });
}
