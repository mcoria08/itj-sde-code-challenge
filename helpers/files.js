const path = require('path');
const fs = require('fs');

const dataPath = "../data";
const directoryPath = path.join(__dirname, dataPath);

/**
* Get the content of data information from the file
* @param {string} fileName - The physical name file
* @return {number} - The data from the text file
*
*/
function readFile(fileName = ""){
    try {
        let contain = fs.readFileSync(`${directoryPath}/${fileName}.txt`).toString();
        return contain;
    } catch (error) {
        console.log(error);
    }   
}



/**
* Create an array with the data in it
* @param {string} str - The name of the file
* @return {array} - array with the information of the file
*
*/
function getData(str){
    try {
        let contain = readFile(str);        
        return contain.split("\n").map(contain => contain.trim());
    } catch (error) {
        console.log(error);
    } 
}


module.exports = {
    getData,    
}