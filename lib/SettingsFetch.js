import { getServerURL } from "../Config";

export async function getSubscriptionStatusOfCurrentUser() {
    let url = await getServerURL()+'/server/User.php?q=getSubscriptionStatus';
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getCurrentUserData() {
    let url = await getServerURL()+'/server/Settings.php?q=userData';
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}
