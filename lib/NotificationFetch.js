import { addToStore, getFromStore } from './Store';
import { getServerURL } from '../Config'

export async function getNotifications() {
  let id = await getFromStore('userID').then((id) => {return id});
  let url = await getServerURL()+'/server/Notification.php?q=getNotifications&id='+ (await id);
  return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getUnseenNotificationsAmount() {
    let id = await getFromStore('userID').then((id) => {return id});
    let url = await getServerURL()+'/server/Notification.php?q=getUnseenNotifications&id='+ (await id);
    return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function markNotificationAsSeen() {
    let id = await getFromStore('userID').then((id) => {return id});
    let url = await getServerURL()+'/server/Notification.php?q=markNotificationAsSeen&id='+ (await id);
    return await fetch(url).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}
  