const {Team} = require('../db');

module.exports = async () => {
    const teams = await Team.findAll();
    if (!teams.length) {
        throw Error('No se encontraron equipos.');
    }
    return teams;
}