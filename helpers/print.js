const formatColor = require('colors');

/**
* Print the solution
* @param {array} arrMatrixShipment - The matrix with the best approach between cities/drives and Suitability Score (SS)
* @param {number} nTotalSS - The total Suitability Score (SS)
*
*/

function printSolution(arrMatrixShipment, nTotalSS){
    let strInformation = "";
    console.log("Total Suitability Score (SS): ".green, formatColor.yellow(nTotalSS));

    arrMatrixShipment.map((item) => {
        strInformation += "Driver: ".green+item.driver.yellow+", Address: ".green+item.street.yellow+"\n";
        return strInformation;
    })
    console.log(strInformation);
}

module.exports = {
    printSolution
}