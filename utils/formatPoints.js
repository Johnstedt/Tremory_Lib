export function formatPoints(points, startFrom){

    for(let i = startFrom; i < (points.length + startFrom); i++){
        points[i-startFrom].index = i

        points[i-startFrom].box_url = '/server/getImage.php?id=' + points[i-startFrom].image_id + '&style=head';
        points[i-startFrom].thumb_url = "/server/getImage.php?id=" + points[i-startFrom].image_id + "&style=thumbnail";
        if(points[i-startFrom].image_time){
            if(points[i-startFrom].image_time.includes("-")){
                points[i-startFrom].year = points[i-startFrom].image_time.split("-")[0];
                points[i-startFrom].month = points[i-startFrom].image_time.split("-")[1];
                points[i-startFrom].day = (points[i-startFrom].image_time.split(" ")[0].split("-")[2])
            }else {
                points[i-startFrom].year = points[i-startFrom].image_time.split(":")[0];
                points[i-startFrom].month = points[i-startFrom].image_time.split(":")[1];
                points[i-startFrom].day = (points[i-startFrom].image_time.split(" ")[0].split(":")[2])
            }
        }
        points[i-startFrom].deg = (points[i-startFrom].image_orientation * 90) - 90;
    }

    return points
}