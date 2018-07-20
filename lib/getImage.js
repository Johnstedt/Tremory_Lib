import { getServerURL } from '../Config'

export function getImage(id, size, type) {
    if(id){
        return getServerURL() + '/server/getImage.php?id=' + id + '&style=' + size
    }
    else {
        if(!type){
            return '/images/standard_thumbnails/standard_image.png'
        }
        
        if(type == "image"){
            return '/images/standard_thumbnails/standard_image.png'
        } else if (type == "album"){
            return '/images/standard_thumbnails/standard_album.png'
        } else if(type == "user"){
            return '/images/standard_thumbnails/standard_user.png'
        } else {
            return '/images/standard_thumbnails/standard_image.png'
        }
    }
}