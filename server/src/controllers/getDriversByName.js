const {Driver} = require('../db');
const getDriversFromAPIandDB = require('../helpers/getDriversFromAPIAndDB');

module.exports = async (name) => {
    if (!name) {
        throw Error('No se ha especificado un nombre.')
    }
    const getDriversDB = await Driver.findAll();
    return getDriversFromAPIandDB(name,getDriversDB)
}