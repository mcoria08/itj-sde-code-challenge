const path = require('path');
const fs = require('fs');

const { printSolution } = require('./helpers/print');
const { createDriverDestinationObject, getTotalSS } = require('./helpers/createDDO');
const { getData } = require('./helpers/files');

//Getting data from TXT files
const dataDrivers = getData('drivers');
const dataShipments = getData('shipments');

//Creating object with maximized drivers/shipment
const arrMatrixShipment = createDriverDestinationObject(dataDrivers, dataShipments);

//Get Total SS
const nTotalSS = getTotalSS(arrMatrixShipment);

printSolution(arrMatrixShipment, nTotalSS);