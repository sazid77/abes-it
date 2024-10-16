
//map()

let num=[1,2,3,4,45,5,45]
// let newnumber=num.map(x=>x*2)
// console.log(newnumber)

// filter()
// let evennum=num.filter(x=>x%2==0);
// console.log(evennum)

//reduce()
    // let sum=num.reduce((x,y)=>x+y,0);
    // console.log(sum);

    // let sum=num.reduce((x,y)=>x*y,1);
    // console.log(sum);


const student=[
    {name :"alice",score:50},
    {name :"bob",score:65},
    {name :"charlie",score:80},
    {name :"david",score:45},
    {name :"rahul",score:50},
];

// let scores=student.map(x=>x.score);
// console.log(scores)

// let sum=student.reduce((x,y)=>x+y.score,0);
// console.log(sum);

// let scores=student.map(x=>x.score).reduce((x,y)=>x+y,0);
// console.log(scores);

// let sixtyabove=student.filter(x=>x.score>60).reduce((x,y)=>x+y.score,0);
// console.log(sixtyabove)

// let sum10=student.filter(x=>x.score>60).map((x)=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(sum10)



//arrow function

// let num1=[1,3,5,6,7,54,9]
// num1.forEach((x)=>console.log(x*3))



// callabck and asyncronus behaviour of js
// sayhello=()=>{
//     console.log("another task")
// };
// console.log("start");
// setTimeout(sayhello,3000);
// console.log("end");


console.log("strat");
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");  
        setTimeout(()=>{
            console.log("third task completed");  
        },3000);     
    },2000);
},1000);
console.log("end");


