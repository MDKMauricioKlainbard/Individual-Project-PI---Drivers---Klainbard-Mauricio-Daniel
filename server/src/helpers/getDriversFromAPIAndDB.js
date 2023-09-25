const axios = require('axios');
const objectDriverAPI = require('./objectDriverAPI')

module.exports = async (name,getDriversDB) => {
    name = name.toLowerCase();
    let matchingDrivers = [];
    let nameDriver;
    let getDriversAPI = await axios.get('http://localhost:5000/drivers');
    getDriversAPI = getDriversAPI.data;
    for (let i = 0; i < getDriversAPI.length; i++) {
        nameDriver = getDriversAPI[i].name.forename.toLowerCase();
        if (nameDriver.search(name) === 0) {
            matchingDrivers.push(objectDriverAPI(getDriversAPI[i]))
        }
        if (matchingDrivers.length === 15) {
            return matchingDrivers
        }
    }
    if (getDriversDB.length) {
        for (let i = 0; i < getDriversDB.length; i++) {
            nameDriver = getDriversDB[i].name.toLowerCase();
            if (nameDriver.search(name) === 0) {
                matchingDrivers.push(getDriversDB[i]);
            }
            if (matchingDrivers.length === 15) {
                return matchingDrivers
            }
        }
    }
    if (!matchingDrivers.length) throw Error('No se han encontrado corredores.')
    return matchingDrivers;
}