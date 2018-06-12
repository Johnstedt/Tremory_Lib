import { getServerURL } from '../Config'

export function getImage(id, type) {
    if(id){
        return getServerURL() + '/server/getImage.php?id=' + id + '&style=' + type
    }
    else {
        return 'src/images/imageView/favorite.png'
    }
}