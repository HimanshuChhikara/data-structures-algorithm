
import fs from 'fs';

async function downloadImage(url){

    for(var i=0;i<url.length;i++){
        var download = url[i];
        const response = await fetch(download)
        .then(res => {
            console.log("Downloaded")
        })
    }

}
