import ImageRotate from 'react-native-image-rotate';
import { getServerURL } from '../Config'
import { getLocation } from '../../components/Geocoder'

export function imageIdToURI(id) {
  return { uri: (getServerURL() + '/server/getImage.php?id=' + id + '&style=regular') }
}

export function imageIdToURL(id) {
  return getServerURL() + '/server/getImage.php?id=' + id + '&style=regular';
}

export function imageIdToHeadURL(id) {
  return getServerURL() + '/server/getImage.php?id=' + id + '&style=head';
}

export function imageIdToThumbURI(id) {
  return { uri: (getServerURL() + '/server/getImage.php?id=' + id + '&style=thumbnail') }
}

export async function imageIdToURLWithOrientation(id, token, mail, orientation, callBack) {

  var uri = getServerURL() + '/server/getImage.php?id=' + id + '&style=regular' + '&cookieMa=' + mail + '&cookieAu=' + token;
  console.log(uri);

  ImageRotate.rotateImage(
    uri,
    (90 * orientation),
    (uri) => {
      callBack(uri);
    },
    (error) => {
      console.error(error);
    }
  );
}

export async function uploadPhoto(photoObject) {
  if (photoObject.uri) {
    const { uri, name, timeStamp, latitude, longitude, index } = photoObject

    let data = new FormData()
    data.append('image', { uri, name, type: 'image/jpg' })
    data.append('timeStamp', timeStamp);
    data.append('latitude', latitude);
    data.append('longitude', longitude);

    const config = { method: 'POST', body: data, credentials: 'include'}
    const url = await getServerURL() + '/server/Upload.php'

    return await fetch(url, config)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status == 'imageAlreadyUploaded') {
          return 'imageAlreadyUploaded'
        } else {
          let latitude = responseJson[0].latitude
          let longitude = responseJson[0].longitude
          let point_id = responseJson[0].point_id

          // Add location data to img in backend and get status
          let status = getLocation(latitude, longitude, point_id) // TODO, get this into reducer
          console.log('======getLocation====status', status);
          return 'success'
        }
      })
      .catch(error => { return error })
  }
}