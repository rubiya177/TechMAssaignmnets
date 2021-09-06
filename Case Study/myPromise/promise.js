const myPromise =new Promise((resolve,reject) => {
    if(500 >400)
    {
        resolve('its truee!!!')
    }
    else{
        reject('its false!!!!')
    }
});

myPromise.then((success)=> {
    console.log(success);
})
     .catch((error)=> {
    console.log(error)
})