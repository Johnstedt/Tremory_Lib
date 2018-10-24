import { getServerURL, getHeader } from '../Config'

export async function setCookie(album_id, key) {

    let url = await getServerURL() + '/server/Login.php?q=setAlbumCookie&album=' + album_id;

    let data = JSON.stringify({
        'key': key,
    })

    const body = new FormData()
    body.append('data', data);

    return await fetch(url, {
        method: 'POST',
        credentials: 'include',
        body
    }).then((response) => response.json())
        .then((responseJson) => { return responseJson })
        .catch((error) => { console.error('setAlbumKeyError: ', error) })
}

export async function getKey(album_id) {
    let url = await getServerURL()+'/server/Album.php?q=getKey&id=' + album_id;
    return await fetch(url, getHeader()).then((response) => response.json()) .then((responseJson) => { return responseJson; }) .catch((error) => { console.error(error); });
}