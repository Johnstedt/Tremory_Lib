import { getServerURL } from '../Config'

export async function getMemory() {
  let url = await getServerURL() + '/server/Settings.php?q=userData'

  return await fetch(url, { credentials: 'include' }).then((response) => response.json()).then((responseJson) => { return responseJson; }).catch((error) => { console.error(error); });
}