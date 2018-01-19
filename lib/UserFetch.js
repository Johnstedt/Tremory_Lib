import { getServerURL } from "../Config";

//import { addToStore, getFromStore } from './Store';

export async function getCurrentUser() {
  //let id = await getFromStore('userID').then((id) => {return id});
  let url = await getServerURL()+'/server/User.php?q=getUser&id=0'//+ (await id);
  return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error('hej ',error); });
}

export async function getOtherUserById(id) {
    let url = await getServerURL()+'/server/User.php?q=getUser&id=' + id;
    return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
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

    console.log('====================================');
    console.log(user_first, user_last, user_description);
    console.log('====================================');
  
    const body = new FormData()
    body.append('data', data);

    /*return*/ await fetch(url, {
      method: 'POST',
      body
    })/*.then((response) => response.json()) .then((responseJson) => { return responseJson; })*/ .catch((error) => { console.error(error); });
}