const {Team} = require('../db');
const axios = require('axios');
const getTeamsNoRepeat = require('../helpers/getTeamsNoRepeat');

module.exports = async () => {
    let data = await axios('http://localhost:5000/drivers');
    data = data.data;
    const teamsNoRepeated = getTeamsNoRepeat(data);
    teamsNoRepeated.forEach(async (team)=>{
        await Team.create({name: team})
    })
    return teamsNoRepeated
}