const fs=require('fs');
// fs.writeFile("data.pdf","Hi Using Fs module to write data",(err)=>{

//     if(err){
//         console.log("Error during filewrite:"+err);
//     }else{
//         console.log("Data written successfully!!!")
//     }
// })


// const fs=require('fs');

function writeAsync(){
    fs.writeFile("data.pdf","Hi Using Fs module to write data",(err)=>{

        if(err){
            console.log("Error during filewrite:"+err);
        }else{
            console.log("Data written successfully!!!")
        }
    })
}
function readAsync(){
    
        const rd=fs.readFile("data.pdf",{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log("Error during filewrite:"+err);
            }else{
                console.log("Data written successfully!!!",data)
            }
        });
        // console.log(rd);
    
}
const obj={ 
writeAsync,
readAsync}
module.exports=obj;