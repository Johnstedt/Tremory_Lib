import { getServerURL } from "../Config";

export async function getSubscriptionStatusOfCurrentUser() {
    let url = await getServerURL()+'/server/User.php?q=getSubscriptionStatus';
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getCurrentUserData() {
    let url = await getServerURL()+'/server/Settings.php?q=userData';
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getUserSettings() {
    let url = await getServerURL()+'/server/Settings.php?q=getSettings';
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function setUserSettings(theme, map_style, mobile_upload, button, mobile_theme) {
    let url = await getServerURL()+'/server/Settings.php?q=updateSettings';
    let data = JSON.stringify({
        'theme': theme,
        'map_style': map_style,
        'button': button,
        'mobile_upload': mobile_upload,
        'mobile_theme': mobile_theme
    })
    
    const body = new FormData()
    body.append('data', data);
    
    return await fetch(url, {
        method: 'POST',
        credentials: 'include',
        body
    }).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}
