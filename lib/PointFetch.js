import { addToStore, getFromStore } from './Store';
import { getServerURL } from '../Config'

export async function getPointsFromCurrentUser() {
  let id = await getFromStore('userID').then((id) => {return id});
  let url = await getServerURL()+'/server/points/Point.php?q=userImagePoint&id=' + (await id);

  return await fetch(url, {credentials: 'include'}).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error); });
}

export async function getPointsFromUserById(user_id) {
  let url = await getServerURL()+'/server/points/Point.php?q=userImagePoint&id=' + user_id;

  return await fetch(url, {credentials: 'include'}).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error); });
}

export async function getPointsFromFeed(segment) {
  let url = await getServerURL()+'/server/Feed.php?q=feed&segment=' + segment + '';

  return await fetch(url, {credentials: 'include'}).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error); });
}

export async function deletePoint(point_id) {
  let url = await getServerURL()+'/server/points/Point.php?q=deletePoint&id=' + point_id ;

  return await fetch(url, {credentials: 'include'}).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error); });
}

export async function addLocationToPoint(point_id, place_id, locality, region, country, continent) {
  
  let url = await getServerURL()+'/server/points/Point.php?q=addLocation'

  let data = JSON.stringify({
    'point_id': point_id,
    'locality': locality,
    'region': region,
    'country': country,
    'continent': continent,
    'place_id': place_id
  })

  const body = new FormData()
  body.append('data', data);

  await fetch(url, {
    method: "POST",
    credentials: 'include',
    body
  }).then((responseJson) => { console.log( responseJson ) }) .catch((error) => { console.error(error)})
 }