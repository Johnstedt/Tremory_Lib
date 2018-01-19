import { addToStore, getFromStore } from './Store';
import { getServerURL } from '../Config'

export async function getFriends(id) {
  let url = await getServerURL()+'/server/Friends.php?q=friendList&id=' + id

  return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function sendFriendRequest(user_id) {  
  let url = await getServerURL()+'/server/Friends.php?q=sendFriendRequest&id=' + user_id;

  return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function respondRequest(request_id, relation) { 
  let url = await getServerURL()+'/server/Friends.php?q=respondRequest&id=' + request_id + '&rel=' + relation;

  return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function deleteFriend(user_id) { 
  let url = await getServerURL()+'/server/Friends.php?q=deleteFriend&id=' + user_id;

  return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}