import { getServerURL } from '../Config'

export async function getNotifications(id) {
  
  let url = await getServerURL()+'/server/Notification.php?q=getNotifications&id='+id;
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getUnseenNotificationsAmount(id) {
  
    let url = await getServerURL()+'/server/Notification.php?q=getUnseenNotifications&id='+ id;
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function markNotificationAsSeen(id) {

    let url = await getServerURL()+'/server/Notification.php?q=markNotificationAsSeen&id='+ id;
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}