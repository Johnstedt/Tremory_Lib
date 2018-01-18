import { Dimensions } from 'react-native'
import { getServerURL } from './Config'

export function getDynamicWidth(px) {
  let ratio = px / 375 //Width of iPhone 6 screen = 375px

  let windowWidth = Dimensions.get('window').width
  return (windowWidth * ratio)
}

export function getRatioFromImg(uri) {
  ratio = 1.2 //Dummy ratio
  //Getting Ratio doesn't work with static images: http://facebook.github.io/react-native/docs/image.html#getsize
  //Image.getSize(uri, (width, height) => { ratio=width/height })

  return ratio
}

export function getImagesFromServer(type) {
  let images = []

  if (type == 'images') {
    images = [
      { url: require('../res/images/hej.png'), key: '1', title: 'Image example 1' },
      { url: require('../res/images/us.jpg'), key: '2', title: 'Image example 2' },
      { url: require('../res/images/us.jpg'), key: '3', title: 'Image example3' },
      { url: require('../res/images/hej.png'), key: '4', title: 'Image example4' },
      { url: require('../res/images/hej.png'), key: '5', title: 'Image example5' },
      { url: require('../res/images/us.jpg'), key: '6', title: 'Image example6' },
      { url: require('../res/images/us.jpg'), key: '7', title: 'Image example7' },
      { url: require('../res/images/hej.png'), key: '8', title: 'Image example8' },
      { url: require('../res/images/us.jpg'), key: '9', title: 'Image example9' },
      { url: require('../res/images/me.jpg'), key: '10', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '11', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '12', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '13', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '14', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '15', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '16', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '17', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '18', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '19', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '20', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '21', title: 'Image example' },
      { url: require('../res/images/me.jpg'), key: '22', title: 'Image example' },
    ]
  } else if (type == 'albums') {
    images = [
      { url: require('../res/images/pictures.jpg'), key: '1', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '2', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '3', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '4', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '5', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '6', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '7', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '8', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '9', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '10', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '11', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '12', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '13', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '14', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '15', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '16', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '17', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '18', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '19', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '20', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '21', title: 'Album Example' },
      { url: require('../res/images/pictures.jpg'), key: '22', title: 'Album Example' },
    ]
  }

  return images
}

export function URL_getImage(id) {
  return getServerURL()+'/server/getImage.php?id=' + id + '&style=p'
}