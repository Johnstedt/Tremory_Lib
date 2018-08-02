import { getServerURL } from "../Config";

//import { addToStore, getFromStore } from './Store';

export async function getCurrentUser() {
  let url = await getServerURL()+'/server/User.php?q=getUser&id=0';
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error('hej ',error); });
}

export async function getOtherUserById(id) {
    let url = await getServerURL()+'/server/User.php?q=getUser&id=' + id;
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

/*
 * Note: You cant as of now change email due to hashing, we should do it in the future but will require
 * better security and verification that the user is the user probably through email and then rehash 
 * through entering old password.
*/
export async function updateUser(user_first, user_last, user_description) {
    let url = await getServerURL()+'/server/User.php?q=update';
  
    let data = JSON.stringify({
      'first_name': user_first,
      'last_name': user_last,
      'user_description': user_description
    })
 
    const body = new FormData()
    body.append('data', data);

    return await fetch(url, {
      credentials: 'include',
      method: 'POST',
      body
    }).then((response) => response.json()) .then((responseJson) => { return responseJson; }).catch((error) => { console.error(error); });
}

export async function setUserThumb(id) { 
  let url = await getServerURL() + '/server/User.php?q=setUserThumbnail&id=' + id;
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function verifyEmail(id, key) { 
  let url = await getServerURL() + '/server/User.php?q=verifyEmail&id=' + id + '&key=' + key;
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}