"use strict";

let performUpload = function(imgStatus : string) : Promise<{imgStatus: string}> {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 2000)
    })
}

var upload;
var compress;
var transfer;

performUpload('uploading...')
.then((res) => {
    upload = res;
    return performUpload('compressing...')
})
.then((res) => {
    compress = res;
    return performUpload('transferring...')
})
.then((res) => {
    transfer = res;
    return performUpload('image upload completed')
})