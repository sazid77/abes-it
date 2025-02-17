const promise = require('fs').promises;
const promise=fs.writeFile("data.pdf","Hi Using Fs promise");
// promise.then(()=>{
//     console.log("Data written successfully!!!")
// }).catch((err)=>{
//     console.log("Error during filewrite:"+err);
// })
// .finallly(()=>{console.log("Finally block")});

const data=fs.readFile("data.txt");
console.log(data);

 async function readData(){
    const data=fs.readFile("data.txt");
    console.log(data.toString());}
readData();
    
   