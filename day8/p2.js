function task(message,delay) {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    })
}

task("first task comletetd ",1000)
.then(()=>task("second task comleted ",2000))
.then(()=>task("third task comleted ",3000))
.then(()=>task("fourth task comleted ",4000))












