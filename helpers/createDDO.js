const { countVowels, countConsonants } = require('./index');


/**
* Get common factors between two numbers
* @param {number} k - First number to get the factors
* @param {number} n - Second number to get the factors
* @return {number} - The first common factor between the two numbers
*
*/
function getFactor(k, n) {
    return k ? getFactor(n % k, k) : n;
}


/**
* Calculate the Suitability Score (SS) for every driver/city
* @param {array} driverDataObject - Array of drivers
* @param {number} streetData - The name of the street
* @return {array} - An array with the list of drivers/city, every records with the SS calculated
*
*/
function calculateSS(driverDataObject, streetData){
    let nSS = 0;
    const objectData = [];

    for(const driver of driverDataObject){
        //Even
        if (streetData.length % 2 === 0){
            nSS = countVowels(driver) * 1.5;
        } else {
            //Odd
            nSS = countConsonants(driver) * 1;
        }

        //Increase 50% if there is a common factor between both lengths
        if (getFactor(driver.length, streetData.length) > 0) {
            nSS *= 1.5;
        }
        objectData.push({driver, street:streetData, nSS})        
    }
    return objectData;
}


/**
* Get the max Suitability Score (SS) of a list of driver/streets given
* @param {array} driverDataObject - Array of drivers
* @param {string} streetData - The name of the street
* @return {array} - An array with the max Suitability Score (SS) of the driver
*
*/
function getMaxSSRecordPerDriver(nSSObject){
    let nMaxSS = 0;
    const MaxSSPerDriver = nSSObject.map((item) => {
        if(item.nSS > nMaxSS){
            nMaxSS = item.nSS;
        }
    });
    let maxSSDriverIndex = nSSObject.findIndex(ssDriver => ssDriver.nSS === nMaxSS)
    return nSSObject[maxSSDriverIndex];
}


/**
* Create an object with list of shipments optimized with the max Suitability Score (SS) for every driver/street
* @param {array} dataDrivers - Array of drivers
* @param {string} dataShipments - Array of streets/address
* @return {array} - An array with the list of shipments
*
*/
function createDriverDestinationObject(dataDrivers, dataShipments){
    const mixDataDDObject = [];    
        
    for (const dataStreet of dataShipments){
        //Calculate SS por every driver ==> N...street
        const nSSObject = calculateSS(dataDrivers, dataStreet);    
        
        //Get MAX SS for every driver/street
        const getMaxDriverStreetSSRecord = getMaxSSRecordPerDriver(nSSObject);
        
        //Delete driver from original array to avoid re-calculate again
        const deleteDriver = dataDrivers.findIndex(driver => driver === getMaxDriverStreetSSRecord.driver);

        //Inserting in the main shipment object
        mixDataDDObject.push(getMaxDriverStreetSSRecord);            
        
        //Removing the Max nSS-Driver-Street
        dataDrivers.splice(deleteDriver, 1);
    }
    return mixDataDDObject;
}


/**
* Sum all the Suitability Score (SS) os every shipment
* @param {array} result - Array of shipments
* @return {number} - The total of Suitability Score (SS)
*
*/
function getTotalSS(result){
    let nTotalSS = 0;
    result.forEach(item => {
        nTotalSS += item.nSS;
    });
    return nTotalSS;
}


module.exports = {
    createDriverDestinationObject,
    getTotalSS
}