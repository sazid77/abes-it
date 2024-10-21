function fetchdata() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const student=[
                {name :"alice",score:50},
                {name :"bob",score:65},
                {name :"charlie",score:80},
                {name :"david",score:45},
                {name :"rahul",score:50},
            ];
            resolve(student);
        }, 4000);
    });

}

fetchdata().then((student)=>{
    let scores=student.map(x=>x.score).reduce((x,y)=>x+y,0);
 console.log(scores);
})
.catch((error)=>{
    console.log(error)
})