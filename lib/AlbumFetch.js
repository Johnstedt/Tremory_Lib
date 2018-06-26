import { getServerURL } from '../Config'

export async function getAlbumsFromCurrentUser() {
  let url = await getServerURL()+'/server/Album.php?q=loadAlbumList&id='+ 0;
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getAlbumsFromUser(user_id) {
  let url = await getServerURL()+'/server/Album.php?q=loadAlbumList&id='+ user_id;
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getAlbumPoints(album_id) {
  let url = await getServerURL()+'/server/Album.php?q=loadAlbumPoints&id=' + album_id;
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function getAlbumUsers(album_id) {
  let url = await getServerURL()+'/server/Album.php?q=loadAlbumUsers&id=' + album_id;
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function createAlbum(name, description, security) {
  let url = await getServerURL()+'/server/Album.php?q=create';

  const body = new FormData()
  body.append('album_name', name);
  body.append('album_description', description);
  body.append('security_level', security);

  return await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body
  }).then((response) => response.json()) 
    .then((responseJson) => { return responseJson; }) 
    .catch((error) => { console.error('createAlbumError: ', error); });
}

export async function updateAlbum(album_id, name, description, security) {
  let url = await getServerURL()+'/server/Album.php?q=updateAlbum';

  let data = JSON.stringify({
    'id': album_id,
    'name': name,
    'description': description,
    'security_level': security
  })

  const body = new FormData()
  body.append('data', data);

  return await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body
  }).then((response) => response.json()) 
    .then((responseJson) => { return responseJson; }) 
    .catch((error) => { console.error(error); });
}

// Will probably make an multiple additions in future
export async function addPointToAlbum(album_id, point_id) {

  let url = await getServerURL()+'/server/Album.php?q=addPointToAlbum';

  let data = JSON.stringify({
    'point_id': point_id,
    'album_id': album_id
  })

  const body = new FormData()
  body.append('data', data);

  return await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body
  }).then((response) => response.json()) 
    .then((responseJson) => { return responseJson })
    .catch((error) => { console.error('addPointToAlbumError: ', error) })
}

/**
 * authority
 * 1 : creator, dont use, automagically set through create album in backend
 * 2 : Admin; everything exept delete album
 * 3 : Member; Add images, can only remove own images
 * 4 : Guest; Can see images, not att or remove
 */
export async function addUserToAlbum(album_id, user_id, authority) {
  let url = await getServerURL()+'/server/Album.php?q=addUserToAlbum';

  let data = JSON.stringify({
    'album_id': album_id,
    'user_id': user_id,
    'authority': authority
  })

  const body = new FormData()
  body.append('data', data);

  return await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body
  }).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function addPointAsAlbumThumbnail(album_id, point_id) {
  let url = await getServerURL()+'/server/Album.php?q=addPointAsAlbumThumbnail';

  console.log("ALBUM "+album_id)
  console.log("POINT"+point_id)
  let data = JSON.stringify({
    'album_id': album_id,
    'point_id': point_id,
  })

  const body = new FormData()
  body.append('data', data);

  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body
  }).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
} 

// No response yet, will have when b 1.1
export async function deleteAlbum(album_id) {
  let url = await getServerURL()+'/server/Album.php?q=delete&id=' + album_id;
  return await fetch(url, {credentials: 'include'}).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}

export async function removePointFromAlbum(album_id, point_id) {
  let url = await getServerURL()+'/server/Album.php?q=removePointFromAlbum';

  let data = JSON.stringify({
    'album_id': album_id,
    'point_id': point_id,
  })

  const body = new FormData()
  body.append('data', data);

  await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body
  }).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
} 

export async function removeUserFromAlbum(album_id, user_id) {
  let url = await getServerURL()+'/server/Album.php?q=removeUserFromAlbum';

  let data = JSON.stringify({
    'album_id': album_id,
    'user_id': user_id,
  })

  const body = new FormData()
  body.append('data', data);

  return await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body
  }).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
} 