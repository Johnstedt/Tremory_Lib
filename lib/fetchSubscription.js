import { getServerURL } from '../Config'

export async function getSubscriptionStatus() {
    let url = await getServerURL()+'/server/User.php?q=getSubscriptionStatus'
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function cancelSubscription() {
    let url = await getServerURL()+'/server/payment/Stripe.php?q=cancelSubscription'
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function resumeSubscription() {
    let url = await getServerURL()+'/server/payment/Stripe.php?q=resumeSubscription'
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function changeSubscription(type) {
    let url = await getServerURL()+'/server/payment/stripe.php?q=changeSubscription&type='+type,
  
    return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}