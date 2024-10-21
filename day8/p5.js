async function orderfood(name,time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(name+" prepared")
        }, time);
    })
}

async function restaurant() {
    console.log("task strated");
    const pizza= await orderfood("pizza",1000);
    console.log(pizza);
    const burger= await orderfood("burger",2000);
    console.log(burger);

}
restaurant();





