const fs = require('fs');

function writeData() {
    try {
        fs.writeFileSync("data.txt", "Hello Writing data using Node Js");
        console.log("Data Written Successfully");
    } catch (err) {
        console.log("Error while writing the data: " + err);
    }
}
function readData() {
    try {
        const rd = fs.readFileSync("data.txt", { encoding: 'utf-8' });
        console.log(rd);
    } catch (err) {
        console.log("Error while reading the data: " + err);
    }
}
function deleteData() {
    try {
        fs.unlinkSync("data.txt");
        console.log("Data Deleted Successfully");
    } catch (err) {
        console.log("Error while deleting the data: " + err);
    }
}

function appendData() {try {
    fs.appendFileSync("data.txt", "\nHello Appending data using Node Js");
    console.log("Data Appended Successfully");
} catch (err) {console.log("Error while appending the data: " + err);}}


module.exports = {
    writeData,
    readData,
    appendData,
    deleteData
};