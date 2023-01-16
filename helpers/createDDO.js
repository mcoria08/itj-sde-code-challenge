const { countVowels, countConsonants } = require('./index');

function getFactor(k, n) {
    return k ? getFactor(n % k, k) : n;
}


function calculateSS(driverDataObject, streetData){
    let nSS = 0;
    const objectData = [];

    for(const driver of driverDataObject){
        //Even
        if (streetData.length % 2 === 0){
            nSS = countVowels(driver) * 1.5;
            if (driver.length % 2 === 0) {
                nSS *= 1.5;
            }
        }
        if (streetData.length % 2 !== 0){
            //Odd
            nSS = countConsonants(driver) * 1;
            if (driver.length % 2 !== 0) {
                nSS *= 1.5;
            }
        }

        //Increase 50% if there is a common factor between both lengths
        // if (getFactor(driver.length, streetData.length) > 0) {
        //     nSS *= 1.5;
        // }
        objectData.push({driver, street:streetData, nSS})        
    }
    return objectData;
}



/*function calculateSS(driverDataObject, streetData){
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
}*/


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


function createDriverDestinationObject(dataDrivers, dataShipments){
    const mixDataDDObject = [];    
        
    for (const shipmentItem of dataShipments){
        //Calculate SS por every driver ==> N...street
        const nSSObject = calculateSS(dataDrivers, shipmentItem);    
        
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