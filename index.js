// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue (driver, key, value)
// {}
// key
// value

let driverCopy = {...driver}
driverCopy[key] = value
return driverCopy

function destructively