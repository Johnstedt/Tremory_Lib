import { getServerURL } from '../Config'

// Note the call might want to do a web redirect, not sure what mobile will do,
// try to ignore redirect if too hard to ignore it on mobile, I can pass a field later here.
export async function createUser(firstName, lastName, userEmail, userPassword) {
  let url = await getServerURL() + '/server/Login.php';

  let data = JSON.stringify({
    'firstName': firstName,
    'lastName': lastName,
    'userEmail': userEmail,
    'userPassword': userPassword,
    'submit': "Register"
  })

  const body = new FormData()
  body.append('data', data);
  body.append('submit', "mobilRegister")
  body.append('firstName', firstName)
  body.append('lastName', lastName)
  body.append('userEmail', userEmail)
  body.append('userPassword', userPassword)

    return await fetch(url, {
    method: 'POST',
    credentials: 'include',
    body
  }).then((response) => response.json()) .then((responseJson) => { return responseJson; }).catch((error) => { console.error(error); });
}