const fs=require('fs')
fs.writeFileSync('data.txt','Welcome to Node.js i am writing this file using node.js')
console.log('File written successfully')

const data = fs.readFileSync('data.txt')
console.log(data.toString())
