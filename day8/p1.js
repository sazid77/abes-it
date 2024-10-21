const myPromise=new Promise((resolve,reject)=>{
let success=true;
setTimeout(() => {
    if (success) {
        resolve("data send successful");
    }
    else{
        reject("data not send ")
    }
}, 5000);
})

myPromise
.then((message)=>{
    console.log("data:"+message);
})
.catch((error)=>{
    console.log(error);
})



