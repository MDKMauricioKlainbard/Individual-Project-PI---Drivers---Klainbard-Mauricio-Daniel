const {Driver, Team} = require('../db');
const axios = require('axios');
const objectDriverAPI = require('../helpers/objectDriverAPI')

module.exports = async () => {
    let driversAPI = await axios.get('http://localhost:5000/drivers');
    driversAPI = driversAPI.data.map(driver=>objectDriverAPI(driver));
    const driversDB = await Driver.findAll({
        include: {
            model: Team,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });
    const drivers = [...driversAPI,...driversDB];
    if (!drivers.length) throw Error('No se encontraron corredores.')
    return drivers;
}