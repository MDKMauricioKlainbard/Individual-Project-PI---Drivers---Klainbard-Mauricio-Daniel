const {Driver, Team} = require('../db');
const axios = require('axios');
const objectDriverAPI = require('../helpers/objectDriverAPI');
const objectDriverBDD = require('../helpers/objectDriverBDD');

module.exports = async (idDriver) => {
    let driver;
    if (!Number(idDriver)) {
        driver = await Driver.findOne({
            where:{id: idDriver},
            include: {
                model: Team,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        });
        driver = objectDriverBDD(driver);
    }
    else {
        await axios(`http://localhost:5000/drivers/${idDriver}`)
        .then(response=>{
            driver = objectDriverAPI(response.data)
        })
        
    }
    if (!driver) throw Error ('No se ha encontrado al corredor.');
    return driver
}